/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";

function App() {
  const [responseData, setResponseData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchedData, setSearchedData] = useState(null);
  const [searchMessage, setSearchMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://finalproject-strapi-back-end.onrender.com/api/final-projects"
        );
        setResponseData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []); // Fetch data on component mount

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    const filteredData = responseData.filter(
      (item) =>
        item.attributes.complainerName &&
        item.attributes.complainerName
          .toLowerCase()
          .includes(inputValue.toLowerCase())
    );

    if (filteredData.length > 0) {
      setSearchedData(filteredData[0].attributes);
      setSearchMessage("");
    } else {
      setSearchedData(null);
      setSearchMessage("Case file not found");
    }
  };

  return (
    <>
      <Header />
      {!loading ? (
        <div className="app-container">
          <h1 style={{ fontSize: "30px" }}>Search For Case File</h1>

          <div className="search-container">
            <input
              style={{
                border: "1px solid black",
                padding: "5px",
                borderRadius: "5px",
              }}
              type="text"
              placeholder="Enter name to search"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button className="search-button" onClick={handleSearch}>
              Search
            </button>
          </div>

          {searchedData ? (
            <div className="details-container">
              <h2>Details for {searchedData.complainerName}:</h2>
              <div className="details-list">
                {Object.entries(searchedData)
                  .filter(([key, value]) => value !== null)
                  .map(([key, value]) => (
                    <p key={key}>
                      <strong>{key}:</strong> {value}
                    </p>
                  ))}
              </div>
            </div>
          ) : (
            <p className="search-message">{searchMessage}</p>
          )}
        </div>
      ) : (
        "Loading data"
      )}
    </>
  );
}

export default App;
