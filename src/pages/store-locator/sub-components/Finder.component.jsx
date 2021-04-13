import React, { useState, useEffect } from "react";

const Finder = ({ stores, filteredStores }) => {
  const [searchTerm, setSearchTerm] = useState();
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    if (e.target.value !== "") {
      setSearchTerm(e.target.value);
      let results = stores.filter((i) =>
        i.postalCode.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchResults(results);
    } else if (e.target.value === "") setSearchResults([]);
  };

  useEffect(() => {
    // console.log("searchTerm", typeof searchTerm);
    // console.log("filteredStores", filteredStores);
    // console.log("searchResult", searchResults);
  }, [filteredStores, searchTerm, searchResults]);

  return (
    <div className="section finder">
      <h3 className="bold mb-5">Find A Store</h3>
      <form>
        <input
          type="text"
          className="search mb-5 px-3"
          onChange={handleChange}
          placeholder="Please enter postal code"
        />
      </form>

      <div className="py-3">Suggested stores nearby</div>
      {searchResults &&
        searchResults.map((store) => (
          <div className="infoTab py-3" key={store.id}>
            <h5 className="bold title mb-3">{store.name}</h5>
            <h5>{store.address1}</h5>
            <h5>{store.address2}</h5>
            <h5>{store.postalCode}</h5>
          </div>
        ))}
      {filteredStores === null
        ? ""
        : filteredStores.map((store) => (
            <div className="infoTab py-3" key={store.id}>
              <h5 className="bold title mb-3">{store.name}</h5>
              <h5>{store.address1}</h5>
              <h5>{store.address2}</h5>
              <h5>{store.postalCode}</h5>
            </div>
          ))}
    </div>
  );
};

export default Finder;
