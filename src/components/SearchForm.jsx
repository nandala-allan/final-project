import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [responseData, setResponseData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchedData, setSearchedData] = useState(null);
  const [searchMessage, setSearchMessage] = useState("");

  useEffect(() => {
    fetchData();
  }, []); // Fetch data on component mount

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://finalproject-strapi-back-end.onrender.com/api/final-projects"
        
      );
      setResponseData(response.data.data);
      console.log(response.data.data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    const filteredData = responseData.filter((item) =>
      item.attributes.complainerName &&
      item.attributes.complainerName.toLowerCase().includes(inputValue.toLowerCase())
    );

    if (filteredData.length > 0) {
      setSearchedData(filteredData[0].attributes);
      setSearchMessage("");
    } else {
      setSearchedData(null);
      setSearchMessage("User not found");
    }
  };

  return (
    <div>
      <h1>Data Fetching </h1>
      <input
        type="text"
        placeholder="Enter name to search"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>

      {searchedData ? (
        <div>
          <h2>Details for {searchedData.complainerName}:</h2>
          <pre>
            {Object.entries(searchedData)
              .filter(([key, value]) => value !== null)
              .map(([key, value]) => (
                <p key={key}>
                  <strong>{key}:</strong> {value}
                </p>
              ))}
          </pre>
        </div>
      ) : (
        <p>{searchMessage}</p>
      )}
    </div>
  );
}

export default App;