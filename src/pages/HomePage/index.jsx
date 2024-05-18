import React from "react";
import useApi from "../../hooks/useApi";
import ProductList from "../../components/ProductList";

const HomePage = () => {
  document.title = "eComify | Home";
  const { data, isLoading, isError } = useApi(
    "https://v2.api.noroff.dev/online-shop"
  );

  if (isLoading) {
    return <>Loading...</>;
  }

  if (isError) {
    return <>Error loading data.</>;
  }

  return <ProductList products={data} />;
};

export default HomePage;
