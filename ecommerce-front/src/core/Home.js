import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts } from "./apiCore";
import Card from "./Card";
import Search from "./Search";
import styled from "styled-components";

const Home = () => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState(false);

  const loadProductsBySell = () => {
    getProducts("sold").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsBySell(data);
      }
    });
  };

  const loadProductsByArrival = () => {
    getProducts("createdAt").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsByArrival(data);
      }
    });
  };

  useEffect(() => {
    loadProductsByArrival();
    loadProductsBySell();
  }, []);

  return (
    <Background>
      <Layout
        title="Tribes of India"
        description="Enjoy your shopping journey :)"
        className="container-fluid"
      >
        <Search />
        <h2 className="mb-4">New Arrivals</h2>
        <div className="row">
          {productsByArrival.map((product, i) => (
            <div key={i} className="col-4 mb-3">
              <Card product={product} />
            </div>
          ))}
        </div>

        <h2 className="mb-4">Best Sellers</h2>
        <div className="row">
          {productsBySell.map((product, i) => (
            <div key={i} className="col-4 mb-3">
              <Card product={product} />
            </div>
          ))}
        </div>
      </Layout>
    </Background>
  );
};

export default Home;

const Background = styled.div`
  background-image: url("https://images.unsplash.com/photo-1562698568-ef21c12f2d38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
  background-size: cover;
  z-index: -1;
`;
