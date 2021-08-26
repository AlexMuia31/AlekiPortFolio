import { Box, Flex, Heading, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

function Profile() {
    const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');
    return (
        <Flex direction={isNotSmallerScreen ? 'row' : 'column'} w='100%'
            maxWidth={{ base: '100vh', md: '130vh', lg: '130vh', xl: '130vh' }}>
            <Box alignSelf="center" px='10' py='16'>
                <Heading fontWeight='extrabold' color='cyan.500' size='4xl'>
                    3+
                </Heading>
                <Text fontSize='2xl' color='gray.400'>
                    Years of Experience
                </Text>
            </Box>
            <Box alignSelf='center' px='' py=''>
                <Text fontWeight='bold' fontSize='2xl'>
                    Web Designer and Developer. Specialised in both front-end and back-end.
                </Text>
            </Box>
        </Flex>
    )
}

export default Profile
