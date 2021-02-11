import React, { useState, useEffect } from "react";
import axios from "axios";
import uuid from "uuid";

const useAxios = (url) => {
  const [responses, setResponses] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //after 1st render, fetch - this is not needed
  /*   useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setResponses([{ ...res.data, id: uuid() }]);
      } catch (e) {
        setError(e);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []); */

  const addCard = () => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setResponses([...responses, { ...res.data, id: uuid() }]);
      } catch (e) {
        setError(e);
        console.log(e);
      }
      setIsLoading(false);
    };
    fetchData();
  };

  return { responses, error, isLoading, addCard };
};

export default useAxios;
