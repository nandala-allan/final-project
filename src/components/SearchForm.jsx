import { Input, Button, Container, Flex, Space } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";

const SearchForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [responseData, setResponseData] = useState(null)
  const handleButtonClick = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1337/api/final-projects"
      );
      // Handle the response data here
      console.log(response.data);
    } catch (error) {
      // Handle errors here
      console.error("Error fetching data:", error);
    }
  }
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

          <Button size="xs" radius="xl" onClick={}>
            Search
          </Button>
        </Flex>
        <Space h="md" />
      </Container>

      <div>
        <h1>{`${inputValue}'s Data`}</h1>
      </div>
    </>
  );
};

export default SearchForm;
