// import { useState } from "react";
import {
	Box,
	Heading,
	HStack,
	IconButton,
	Image,
	Text,
} from "@chakra-ui/react";
import { useColorModeValue } from "../components/ui/color-mode.jsx";

import { FaEdit, FaRegTrashAlt } from "react-icons/fa"

const ProductCard = ({ product }) => {

	const textColor = useColorModeValue("gray.600", "gray.200");
	const bg = useColorModeValue("white", "gray.800");

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
					<IconButton bg="blue.800" aria-label="Edit Product">
						<FaEdit />
					</IconButton>
					<IconButton bg="red.500" aria-label="Delete Product">
						<FaRegTrashAlt />
					</IconButton>
				</HStack>
			</Box>

		</Box>
	);
};
export default ProductCard;