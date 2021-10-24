import { Box, Flex, Heading, Text, useMediaQuery } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Jobs } from '../api/index';

function Profile() {
    const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');
    const [jobs, getJobs] = useState([]);
    const [experience, getExperience] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('http://127.0.0.1:8000/main/jobs/')
            getJobs(response.data)
            console.log(response.data)
        }
        getData();
    }, []);

    useEffect(() => {
        const getYears = async () => {
            const response = await axios.get('http://127.0.0.1:8000/main/')
            getExperience(response.data)
            console.log(response.data)
        }
        getYears();
    }, []);
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
                <Flex direction={isNotSmallerScreen ? 'row' : 'column'} mt={8}>
                    {jobs?.map((job) => (
                        <Flex rounded='xl' direction='column' mt={4} mr={2} bg='blue.400' h='30vh' justify='flex-end' >

                            <Text color='white' p='4' fontSize='xl' fontWeight='semibold'>
                                {job.title}
                            </Text>
                            <img src={job.image} alt='' />
                        </Flex>
                    ))}
                </Flex>
            </Box>
        </Flex>
    )
}

export default Profile
