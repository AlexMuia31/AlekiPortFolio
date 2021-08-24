import { VStack, Flex, Heading, IconButton, Spacer } from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { useColorMode } from "@chakra-ui/color-mode";
import Header from './components/Header';
import Social from "./components/Social";
import Profile from "./components/Profile";




function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (

    <VStack p={5}>
      <Flex w='100%'>
        <Heading ml='8' size='md' fontWeight='semibold' color='cyan.400'>
          AlexMuia
        </Heading>
        <Spacer />
        <IconButton icon={<FaTwitter />} isRound='true' />
        <IconButton ml={2} icon={<FaLinkedin />} isRound='true' />
        <IconButton ml={2} icon={<FaGithub />} isRound='true' />
        <IconButton ml={8} icon={isDark ? <FaMoon /> : <FaSun />} isRound='true' onClick={toggleColorMode} />

      </Flex>
      <Header />
      <Social />
      <Profile />
    </VStack>



  );
}

export default App;
