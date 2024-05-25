import React from "react";
import useApi from "../../hooks/useApi";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import ProductList from "../../components/ProductList";

const HomePage = () => {
  document.title = "Home | eComify";
  const { data, isLoading, isError, errorMessage } = useApi(
    "https://v2.api.noroff.dev/online-shop"
  );

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

  return <ProductList products={data} />;
};

export default HomePage;
