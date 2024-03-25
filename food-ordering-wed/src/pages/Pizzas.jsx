import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "reactstrap";

import ProductCard from "../components/UI/product-card/ProductCard";

import Helmet from "../components/Helmet/Helmet";
import "../styles/menu.css";
import products from '../assets/fake-data/products'

import foodCategoryImg01 from '../assets/images/hamburger.png'

import foodCategoryImg02 from '../assets/images/pizza.png'

import foodCategoryImg03 from '../assets/images/bread.png'
import CommonSection from '../components/UI/common-section/CommonSection'
const Pizzas = () => {
    const [category, setCategory] = useState("ALL");
    const [allProducts, setAllProducts] = useState(products);
  
    //const [hotPizza, setHotPizza] = useState([]);
  
    // useEffect(() => {
    //   const filteredPizza = products.filter((item) => item.category === "Pizza");
    //   //const slicePizza = filteredPizza.slice(0, 4);
    //   //setHotPizza(slicePizza);
    // }, []);
  
    useEffect(() => {
      if (category === "ALL") {
        setAllProducts(products);
      }
  
      if (category === "BURGER") {
        const filteredProducts = products.filter(
          (item) => item.category === "Burger"
        );
  
        setAllProducts(filteredProducts);
      }
  
      if (category === "PIZZA") {
        const filteredProducts = products.filter(
          (item) => item.category === "Pizza"
        );
  
        setAllProducts(filteredProducts);
      }
  
      if (category === "BREAD") {
        const filteredProducts = products.filter(
          (item) => item.category === "Bread"
        );
  
        setAllProducts(filteredProducts);
      }
    }, [category]);
   

  return (
    <Helmet title="Menu">
      <CommonSection title ='MENU'/>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className='food__category d-flex align-items-center justify-content-center gap-5'>
                <button className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() =>setCategory('ALL')}> All</button>
                <button className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  } `}
                  onClick={() =>setCategory('BURGER')}>
                  <img src={foodCategoryImg01} alt =''/>Burger</button>
                <button className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  } `} onClick={() =>setCategory('PIZZA')}><img src={foodCategoryImg02} alt =''/>Pizza</button>
                <button className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  } `} onClick={() =>setCategory('BREAD')} ><img src={foodCategoryImg03} alt =''/>Bread</button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col
                lg="3"
                md="4"
                sm="6"
                xs="6"
                key={item.id}
                className="mb-4 mt-4"
              >
                <ProductCard item={item} />
              </Col>
            ))}

          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Pizzas;
