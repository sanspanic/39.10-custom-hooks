import React, { useState, useEffect } from "react";
import axios from "axios";
import uuid from "uuid";

const useAxios = (url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //after 1st render, fetch
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setResponse(res.data);
      } catch (e) {
        setError(e);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { response, error, isLoading };
};

export default useAxios;
