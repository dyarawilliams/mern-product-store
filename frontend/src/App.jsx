import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx"
import { useColorModeValue } from "./components/ui/color-mode.jsx";
import CreatePage from "./pages/CreatePage.jsx"
import HomePage from "./pages/HomePage.jsx"


function App() {
  return (
    <Box minH="100vh" bg={useColorModeValue("white", "black")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
