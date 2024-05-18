import useApi from "../../hooks/useApi";

const HomePage = () => {
  document.title = "eComify | Home";
  const { data, isLoading, isError } = useApi(
    "https://v2.api.noroff.dev/online-shop"
  );

  if (isLoading) {
    return <>Loading</>;
  }

  if (isError) {
    return <>Error</>;
  }

  return <>Data Loaded Successfully!</>;
};

export default HomePage;
