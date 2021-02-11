import React, { useState, useEffect } from "react";
import axios from "axios";
import uuid from "uuid";

const useAxios = (url) => {
  const [responses, setResponses] = useState(null);

  //after 1st render, fetch
  useEffect(() => {
    try {
      axios.get(url).then((res) => setResponses(res.data));
    } catch (e) {
      console.log(e);
    }
  }, []);

  const addCard = (url) => {
    try {
      axios
        .get(url)
        .then((res) =>
          setResponses([...responses, { ...res.data, id: uuid() }])
        );
    } catch (e) {
      console.log(e);
    }
  };

  return [responses, addCard];
};

export default useAxios;
