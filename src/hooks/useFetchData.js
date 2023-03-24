import { useState, useEffect } from "react";
import axios from "axios";
export function useFetchData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ state: false, message: "" });
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const result = await axios.get(url);
        setData(result.data);
        setLoading(false);
      } catch (error) {
        setError({ state: true, message: error });
      }
    }
    fetchData();
  }, [url]);
  return { data, loading, error };
}
