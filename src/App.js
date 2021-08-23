import { Stack, HStack, VStack, Flex, Heading, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { useColorMode } from "@chakra-ui/color-mode";




function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (

    <VStack>
      <Flex w='100%'>
        <Heading ml='8' size='md' fontWeight='semibold' color='cyan.400'>
          AlexMuia
        </Heading>
      </Flex>
      <IconButton ml={8} icon={isDark ? <FaMoon /> : <FaSun />} isRound='true' onClick={toggleColorMode} />

    </VStack>



  );
}

export default App;
