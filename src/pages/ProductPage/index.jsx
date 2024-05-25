import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import Loader from "../../components/Loader";
import Product from "../../components/Product";

const ProductPage = () => {
  let { id } = useParams();

  const { data, isLoading, isError } = useApi(
    `https://v2.api.noroff.dev/online-shop/${id}`
  );

  document.title = `eComify | ${data.title}`;

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  if (isError) {
    return <>Error loading data.</>;
  }

  return (
    <>
      <Product products={data} />
    </>
  );
};

export default ProductPage;
