import { useState } from "react";
import { Box, Container, Heading, VStack, Input } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";
import { useColorModeValue } from "../components/ui/color-mode.jsx";
import { Toaster, toaster } from "../components/ui/toaster.jsx"

import { useProductStore } from "../store/product.js";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: ""
  });

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
		const { success, message } = await createProduct(newProduct);

    if (!success) {
			toaster.create({
				title: "Error",
				description: message,
        status: "error",
        type: "error",
			});
		} else {
			toaster.create({
				title: "Success",
				description: message,
        status: "success",
        type: "success",
			});
		}
		setNewProduct({ name: "", price: "", image: "" });
  };

  return (
    <Container>
      <VStack spacing="8">
        <Heading as="h1" size="2xl" textAlign="center" mb="8">
          Create New Product
        </Heading>
        <Box 
          w="2/3" 
          bg={useColorModeValue("blue.500", "blue.500")} 
          p="6" 
          borderRadius="md" 
          shadow="md"
        >
          <VStack spacing="4">
            <Input 
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value})}
              bg={useColorModeValue("white", "black")}
            />
            <Input 
              placeholder="Price"
              name="price"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value})}
              bg={useColorModeValue("white", "black")}
            />
            <Input 
              placeholder="Image URL"
              name="image"
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value})}
              bg={useColorModeValue("white", "black")}
            />
            <Button bg={useColorModeValue("black", "white")} onClick={handleAddProduct} size="md" w="full" >
							Add Product
						</Button>
            <Toaster />
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;