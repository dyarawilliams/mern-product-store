import { Button, Container, Flex, Text, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsPlusCircle } from "react-icons/bs";


const Navbar = () => {
  return (
    <Container maxW="1140px" px={4}>
        <Flex 
            h={16} 
            align="center" 
            justify="space-between"
            flexDir={{
                base: "column",
                sm: "row"
            }}
        >
            <Text
                fontSize={{ base: "22", sm: "28" }}
                fontWeight="bold"
                textTransform="uppercase"
                textAlign="center"
            >
                <Link to={"/"}>Product Store</Link>
            </Text>

            <HStack spacing={2} alignItems={"center"}>
				<Link to={"/create"}>
					<Button>
						<BsPlusCircle fontSize={20} />
					</Button>
				</Link>
				{/* <Button onClick={toggleColorMode}>
					{colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}
				</Button> */}
				</HStack>
        </Flex>
    </Container>
  )
}

export default Navbar