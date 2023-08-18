import { Input, Button, Container, Flex, Space } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const SearchForm = () => {
    const getData = async () => {
        try {
          const response = await axios.get("http://localhost:1337/api/final-projects");
          // Handle the response data here
          console.log(response.data);
        } catch (error) {
          // Handle errors here
          console.error("Error fetching data:", error);
        }
      };
    
      getData();

      const handleChenges=(e)=>{
        const inputValue=e.target.value;
        console.log(inputValue)
      }


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
       
      
          <Button size="xs" radius="xl">
            Search
          </Button>
        </Flex>
        <Space h="md" />
      </Container>
    </>
  );
};

export default SearchForm;