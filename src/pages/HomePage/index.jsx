// /src/pages/HomePage/index.jsx

import React from "react";
import useApi from "../../hooks/useApi";
import { baseUrl } from "../../constant/api";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import ProductList from "../../components/ProductList";

const HomePage = () => {
  document.title = "eComify | Home";
  const { data, isLoading, isError, errorMessage } = useApi(baseUrl);

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Error message={errorMessage} />
      </>
    );
  }

  return (
    <>
      <ProductList products={data} />
    </>
  );
};

export default HomePage;
