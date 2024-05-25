// src/pages/ProductPage/index.jsx

import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { baseUrl } from "../../constant/api";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Product from "../../components/Product";

const ProductPage = () => {
  let { id } = useParams();

  const { data, isLoading, isError, errorMessage } = useApi(`${baseUrl}${id}`);

  // Check if data is available before accessing the title
  document.title = `eComify | ${data?.title || "Product"}`;

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error message={errorMessage} />;
  }

  return <Product product={data} />;
};

export default ProductPage;
