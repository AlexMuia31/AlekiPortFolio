import React from 'react'
import { Box, Text, Circle, Flex, Stack, useMediaQuery, Button, Image } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import profile from '../profile.jpeg';


function Header() {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    return (
        <div>
            <Stack>
                <Circle position='absolute' bg='blue.100' opacity='0.1' w='250px' h='250px' alignSelf='flex-end' />
                <Flex direction={isNotSmallerScreen ? 'row' : 'column'} spacing='200px' p={isNotSmallerScreen ? '32' : '0'} alignSelf='flex-start' >
                    <Box mt={isNotSmallerScreen ? '0' : '16'} alignSelf='flex-start'>
                        <Text fontSize='5xl' fontWeight='semibold'>
                            Hi, I am
                        </Text>
                        <Text fontSize='5xl' fontWeight='bold' bgGradient='linear(to-r, cyan.400, blue.500, purple.600)' bgClip='text'>
                            Alex Muia
                        </Text>
                        <Text color={isDark ? "gray.200" : 'gray.500'} >
                            A software developer with knowledge in JavaScript , Python, ReactJS , Django and APIs.
                        </Text>
                        <Button mt={8} colorScheme='blue' onClick={() =>
                            window.open('mailto:alexmuia31@gmail.com')}>Hire Me</Button>
                    </Box>
                    <Image alignSelf='center' mt={isNotSmallerScreen ? '0' : '12'}
                        mb={isNotSmallerScreen ? '0' : '12'} borderRadius='full'
                        backgroundColor='transparent' boxShadow='lg'
                        boxSize='250px' src='https://avatars.githubusercontent.com/u/52041040?s=400&u=c5ec7727d16abe300837b5dd5b6c64fc80fa2f60&v=4' />
                </Flex>
            </Stack>

        </div>
    )
}

export default Header
