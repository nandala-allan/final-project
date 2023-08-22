// import { useForm } from "@mantine/form";
// import { Box, TextInput, NumberInput, Button, Group } from "@mantine/core";
// import Header from "./Header";
// import Footer from "./Footer";

// const border = {
//   border: "2px solid rgba(0, 0, 0, 0.1)",
//   padding: "20px",
//   borderRadius: "8px",
//   maxWidth: "400px",
//   margin: "80px auto", // Adjust the margin to move it down
//   boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Thicker shadow
// };

// function Search() {
//   const form = useForm({
//     initialValues: { NAME: "", IDnumber: undefined },
//     validate: (values) => ({
//       NAME: values.NAME.length < 2 ? "Enter Valid Name" : null,
//       IDnumber:
//         values.IDnumber === undefined
//           ? "ID Number is Required"
//           : values.IDnumber.length !== 9
//           ? "Enter A Valid ID number"
//           : null,
//     }),
//   });

//   return (
//     <div>
//       <Header />
//       <div className="search-form">
//         <div style={border}>
//           <Box maxWidth={340} mx="50px">
//             <h2>Search Form</h2>
//             <form onSubmit={form.onSubmit((values) => console.log(values))}>
//               <TextInput
//                 label="NAME"
//                 placeholder="Name"
//                 error={form.errors.NAME}
//                 {...form.getInputProps("NAME")}
//               />
//               <NumberInput
//                 mt="sm"
//                 label="ID NUMBER"
//                 placeholder="ID Number"
//                 error={form.errors.IDnumber}
//                 {...form.getInputProps("IDnumber")}
//               />

//               <Group position="right" mt="md">
//                 <Button
//                   className="px-4 py-3 font-medium uppercase text-smbg-blue-500"
//                   type="submit"
//                 >
//                   Search
//                 </Button>
//               </Group>
//             </form>
//           </Box>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Search;
