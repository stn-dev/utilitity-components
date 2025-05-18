import { useEffect, useState } from "react";

export const useFetch = (
  url: string,
  depedencie: number | string | boolean
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    try {
      const fetchingData = async () => {
        setIsLoading(true);
        const fetchData = await fetch(url, { signal });
        const res = await fetchData.json();
        setData(res.data);
        setIsLoading(false);
      };
      fetchingData();
    } catch (error) {
      setError(`error occuring : ${error}`);
      setIsLoading(false);
    }

    return () => controller.abort();
  }, [depedencie, url]);

  return { data, isLoading, error };
};
