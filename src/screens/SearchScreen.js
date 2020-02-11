import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    // Filters through results based on price.
    // price === "$" || "$$" || "$$$"
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView style={{ top: "2%" }}>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
         
        />
        <ResultsList 
          title="Bit Pricier"
          results={filterResultsByPrice("$$")}
          
        />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice("$$$")}
          
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
