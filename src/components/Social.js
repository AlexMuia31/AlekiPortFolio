import { HStack, IconButton, Icon } from '@chakra-ui/react'

import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Social() {
    return (
        <HStack spacing='20'>
            <Icon as={FaTwitter} boxSize='30' />
            <Icon as={FaLinkedin} boxSize='30' />
            <Icon as={FaGithub} boxSize='30' />

        </HStack>
    )
}

export default Social
