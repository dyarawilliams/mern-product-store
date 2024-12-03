import { Container, Flex, Text, HStack } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";
import { useColorMode } from "../components/ui/color-mode.jsx";
import { Link } from "react-router-dom";

import { BsPlusCircle } from "react-icons/bs";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";


const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Container maxWidth="1140px" px="4">
            <Flex 
                height="16" 
                align="center" 
                justify="space-between"
                direction={{ base: "column", sm: "row" }}
            >
                <Text
                    fontSize={{ base: "22", sm: "28" }}
                    fontWeight="bold"
                    textTransform="uppercase"
                    textAlign="center"
                >
                    <Link to={"/"}>Product Store</Link>
                </Text>

                <HStack spacing="2" align="center">
                    <Link to={"/create"}>
                        <Button>
                            <BsPlusCircle fontSize="20" />
                        </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
                    </Button>
                </HStack>
            </Flex>
        </Container>
    );
};

export default Navbar;