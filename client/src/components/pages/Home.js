import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Col, Row} from "react-bootstrap";
import Product from '../Product/Product.js';

const Home = () => {
  const [products, setProducts] = useState([]);

  const getAllProduct = async () => {
    try {
      const {data} = await axios.get('api/products');
     
      if (data) setProducts(data);

    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, [])

  return (
    <React.Fragment>
        <h1 className='text-uppercase'>Our Latest Product</h1>

        <Row>
            {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            ))}
        </Row>
    </React.Fragment>
  );
}

export default Home;
