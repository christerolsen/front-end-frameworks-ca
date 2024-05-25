import { useState, useEffect } from "react";

function useApi(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        setErrorMessage("");

        const fetchedData = await fetch(url);
        if (!fetchedData.ok) {
          throw new Error(
            `Error: ${fetchedData.status} ${fetchedData.statusText}`
          );
        }
        const json = await fetchedData.json();
        const data = json.data;

        // Adding a delay to show a loader
        await new Promise((resolve) => setTimeout(resolve, 500));

        setData(data);
      } catch (error) {
        console.error(error);
        setIsError(true);
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [url]);

  return { data, isLoading, isError, errorMessage };
}

export default useApi;
