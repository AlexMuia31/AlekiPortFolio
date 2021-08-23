import React from 'react'
import { Box, Text, Circle, Flex, Stack, useMediaQuery } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";


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
                    </Box>
                </Flex>
            </Stack>

        </div>
    )
}

export default Header
