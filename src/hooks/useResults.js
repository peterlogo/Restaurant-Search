import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMeassge] = useState("");
  
    const searchApi = async searchTerm => {
      try {
        const response = await yelp.get("/search", {
          params: {
            limit: 50,
            term: searchTerm,
            location: "ottawa"
          }
        });
        setResults(response.data.businesses);
      } catch (err) {
        setErrorMeassge("Something went Wrong!!!");
      }
    };
  
    useEffect(() => {
      searchApi("pasta");
    }, []);

    return [searchApi, results, errorMessage];
};