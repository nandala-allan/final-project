// import { Input, Button, Container, Flex, Space } from "@mantine/core";
// import { IconSearch } from "@tabler/icons-react";
// import { useState } from "react";
// import Table from "./Table";
// import "../components/Searchform.css";
// import Header from "../components/Header";

// const SearchForm = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [responseData, setResponseData] = useState(null);
//   const [searchedData, setSearchedData] = useState(null);

//   const handleButtonClick = async () => {
//     try {
//       const response = await axios.get(
//         "https://finalproject-strapi-back-end.onrender.com/api/final-projects"
//       );
//       //localhost:1337/api/final-projects
//       //reqres.in/api/login
//       console.log(response.data.data);

//       // setFormData({
//       //   caseDetails: response.data.caseDetails,
//       //   complainerAge: response.data.complainerAge,
//       //   complainerEmail: response.data.complainerEmail,
//       //   complainerId: response.data.complainerId,
//       //   complainerName: response.data.complainerName,
//       //   complainerPlaceOfBirth: response.data.complainerPlaceOfBirth,
//       //   complainerResidence: response.data.complainerResidence,
//       //   complainerTelephone: response.data.complainerTelephone,
//       //   createdAt: response.data.createdAt,
//       //   crimeScene: response.data.crimeScene,
//       //   gender: response.data.gender,
//       //   happenedDate: response.data.happenedDate,
//       //   happenedTime: response.data.happenedTime,
//       //   injuries: response.data.injuries,
//       //   medicalAssistance: response.data.medicalAssistance,
//       //   offence: response.data.offence,
//       //   officerName: response.data.officerName,
//       //   others: response.data.others,
//       //   policeStation: response.data.policeStation,
//       //   publishedAt: response.data.publishedAt,
//       //   rank: response.data.rank,
//       //   referenceNumber: response.data.referenceNumber,
//       //   regestredData: response.data.regestredData,
//       //   updatedAt: response.data.updatedAt,
//       //   victimName: response.data.victimName,
//       //   victimResidence: response.data.victimResidence,
//       //   victimTelephone: response.data.victimTelephone,
//       //   witnessName: response.data.witnessName,
//       //   witnessTel: response.data.witnessTel,
//       // });

//       setResponseData(response.data.data);
//       // console.log(responseData);
//       const filteredData = responseData.filter((item) =>
//         item.attributes.complainerName
//           .toLowerCase()
//           .includes(inputValue.toLowerCase())
//       );

//       setSearchedData(filteredData);
//     } catch (error) {
//       // Handle errors here
//       console.error("Error fetching data:", error);
//     }
//   };
//   const getData = async () => {};

//   getData();

//   const handleSearch = () => {
//     if (responseData) {
//       // Filter the data based on the 'name' property
//       const filteredData = responseData.data.data.filter((item) =>
//         item.id.toLowerCase().includes(inputValue.toLowerCase())
//       );
//       setSearchedData(filteredData);
//     }
//     console.log(filteredData);
//   };
//   const handleChenges = (e) => {
//     const inputValue = e.target.value;
//     setInputValue(inputValue);
//   };

//   return (
//     <>
//       <Header />
//       <Container className="container">
//         <Flex
//           className="flex"
//           direction={{ base: "column", sm: "row" }}
//           gap="sm"
//           align="center"
//         >
//           <Input
//             onChange={handleChenges}
//             icon={<IconSearch size={18} />}
//             placeholder="Search"
//             radius="sm"
//           />

//           <Button size="xs" radius="xl" onClick={handleButtonClick}>
//             Search
//           </Button>
//         </Flex>
//         {/* <Space h="md" /> */}
//       </Container>

//       {responseData && (
//         <div>
//           <h1>{`${inputValue}'s Data`}</h1>
//           <Table className="table" searchedData={searchedData} />
//         </div>
//       )}
//     </>
//   );
// };

// export default SearchForm;

import { Input, Button, Container, Flex, Space } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import Table from "./Table";
import "../components/Searchform.css";
import Header from "./Header";
import axios from "axios";

const SearchForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [searchedData, setSearchedData] = useState(null);

  const handleButtonClick = async () => {
    try {
      const response = await axios.get(
        "https://finalproject-strapi-back-end.onrender.com/api/final-projects"
      );
      //localhost:1337/api/final-projects
      //reqres.in/api/login
      console.log(response.data.data);

      // setFormData({
      //   caseDetails: response.data.caseDetails,
      //   complainerAge: response.data.complainerAge,
      //   complainerEmail: response.data.complainerEmail,
      //   complainerId: response.data.complainerId,
      //   complainerName: response.data.complainerName,
      //   complainerPlaceOfBirth: response.data.complainerPlaceOfBirth,
      //   complainerResidence: response.data.complainerResidence,
      //   complainerTelephone: response.data.complainerTelephone,
      //   createdAt: response.data.createdAt,
      //   crimeScene: response.data.crimeScene,
      //   gender: response.data.gender,
      //   happenedDate: response.data.happenedDate,
      //   happenedTime: response.data.happenedTime,
      //   injuries: response.data.injuries,
      //   medicalAssistance: response.data.medicalAssistance,
      //   offence: response.data.offence,
      //   officerName: response.data.officerName,
      //   others: response.data.others,
      //   policeStation: response.data.policeStation,
      //   publishedAt: response.data.publishedAt,
      //   rank: response.data.rank,
      //   referenceNumber: response.data.referenceNumber,
      //   regestredData: response.data.regestredData,
      //   updatedAt: response.data.updatedAt,
      //   victimName: response.data.victimName,
      //   victimResidence: response.data.victimResidence,
      //   victimTelephone: response.data.victimTelephone,
      //   witnessName: response.data.witnessName,
      //   witnessTel: response.data.witnessTel,
      // });

      setResponseData(response.data.data);
      // console.log(responseData);
      const filteredData = responseData.filter((item) =>
        item.attributes.complainerName
          .toLowerCase()
          .includes(inputValue.toLowerCase())
      );

      setSearchedData(filteredData);
    } catch (error) {
      // Handle errors here
      console.error("Error fetching data:", error);
    }
  };
  const getData = async () => {};

  getData();

  const handleSearch = () => {
    if (responseData) {
      // Filter the data based on the 'name' property
      const filteredData = responseData.data.data.filter((item) =>
        item.id.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSearchedData(filteredData);
    }
    console.log(filteredData);
  };
  const handleChenges = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
  };

  return (
    <>
      <Header />
      <Container className="container">
        <Flex
          className="flex"
          direction={{ base: "column", sm: "row" }}
          gap="sm"
          align="center"
        >
          <Input
            onChange={handleChenges}
            icon={<IconSearch size={18} />}
            placeholder="Search"
            radius="sm"
          />

          <Button size="xs" radius="xl" onClick={handleButtonClick}>
            Search
          </Button>
        </Flex>
        {/* <Space h="md" /> */}
      </Container>

      {responseData && (
        <div>
          <h1>{`${inputValue}'s Data`}</h1>
          <Table className="table" searchedData={searchedData} />
        </div>
      )}
    </>
  );
};

export default SearchForm;
