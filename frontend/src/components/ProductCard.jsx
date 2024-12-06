import { FaEdit, FaRegTrashAlt } from "react-icons/fa"
import {
	Box,
	DialogActionTrigger,
	DialogBackdrop,
	Heading,
	HStack,
	IconButton,
	Image,
	Input,
	Text,
	useDisclosure,
	VStack,
} from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";
import { useColorModeValue } from "../components/ui/color-mode.jsx";
import {
	DialogBody,
	DialogCloseTrigger,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogRoot,
	DialogTitle,
	DialogTrigger,
} from "../components/ui/dialog.jsx";
import { Toaster, toaster } from "../components/ui/toaster.jsx"
import { useProductStore } from "../store/product.js";
import { useState } from "react";

const ProductCard = ({ product }) => {
	const textColor = useColorModeValue("gray.600", "gray.200");
	const bg = useColorModeValue("white", "gray.800");

	const { deleteProduct, updateProduct } = useProductStore();
	const [updatedProduct, setUpdatedProduct] = useState(product);

	const { onClose } = useDisclosure();

	const handleDeleteProduct = async (pid) => {
		const { success, message } = await deleteProduct(pid);
		if (!success) {
			toaster.create({
				title: "Error",
				description: message,
				type: "error",
			});
		} else {
			toaster.create({
				title: "Success",
				description: message,
				type: "success",
			});
		}
	};

	const handleUpdateProduct = async (pid, updatedProduct) => {
		const { success, message } = await updateProduct(pid, updatedProduct);
		onClose();
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
				description: "Product updated successfully",
				status: "success",
				type: "success",
			});
		}
	};

	return (
		<Box
			shadow="lg"
			rounded="lg"
			overflow="hidden"
			transition="all 0.3s"
			_hover={{ transform: "translateY(-5px)", shadow: "xl" }}
			bg={bg}
		>
			<Image src={product.image} alt={product.name} h="48" w="full" objectFit="cover" />

			<Box p="4">
				<Heading as="h3" size="md" mb="2">
					{product.name}
				</Heading>

				<Text fontWeight="bold" fontSize="xl" mb="4" color={textColor}>
					${product.price}
				</Text>

				<HStack spacing="2">
					<DialogRoot>
						<DialogTrigger>
							<IconButton bg="blue.800" aria-label="Edit Product">
								<FaEdit />
							</IconButton>
						</DialogTrigger>
						<DialogBackdrop />
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Update Product</DialogTitle>
							</DialogHeader>
							<DialogBody>
								<VStack spacing="4">
									<Input
										placeholder="Product Name"
										name="name"
										value={updatedProduct.name}
										onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
									/>
									<Input
										placeholder="Price"
										name="price"
										type="number"
										value={updatedProduct.price}
										onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
									/>
									<Input
										placeholder="Image URL"
										name="image"
										value={updatedProduct.image}
										onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
									/>
								</VStack>
							</DialogBody>
							<DialogFooter>
								<DialogActionTrigger>
									<Button
										colorPalette="blue"
										mr="3"
										onClick={() => handleUpdateProduct(product._id, updatedProduct)}
									>
										Update
									</Button>
								</DialogActionTrigger>
								<DialogActionTrigger>
									<Button variant="outline" >Cancel</Button>
								</DialogActionTrigger>
							</DialogFooter>
							<DialogCloseTrigger/>
						</DialogContent>
					</DialogRoot>
					<IconButton bg="red.500" aria-label="Delete Product" onClick={() => handleDeleteProduct(product._id)}>
						<FaRegTrashAlt />
					</IconButton>
				</HStack>
			</Box>

			<Toaster />
		</Box>
	);
};
export default ProductCard;