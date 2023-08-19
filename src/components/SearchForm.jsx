import { Input, Button, Container, Flex, Space } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
// import axios from "axios";

const SearchForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [responseData, setResponseData] = useState(null);
  const handleButtonClick = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1337/api/final-projects"
      );
      // Handle the response data here
      console.log(response.data);
      setResponseData(response.data);

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
    } catch (error) {
      // Handle errors here
      console.error("Error fetching data:", error);
    }
  };
  // const getData = async () => {

  // };

  // getData();

  const handleChenges = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
    console.log(inputValue);
  };

  return (
    <>
      <Container mt={120}>
        <Flex direction={{ base: "column", sm: "row" }} gap="sm" align="center">
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
        <Space h="md" />
      </Container>

      {responseData && (
        <div>
          <h1>{`${inputValue}'s Data`}</h1>
          <pre>{JSON.stringify(responseData.data[0], null, 2)}</pre>
        </div>
      )}
    </>
  );
};

export default SearchForm;
