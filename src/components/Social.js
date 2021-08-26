import { HStack, IconButton } from '@chakra-ui/react'
import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Social() {
    return (
        <HStack>
            <IconButton icon={<FaTwitter />} isRound='true' />
            <IconButton ml={8} icon={<FaLinkedin />} isRound='true' />
            <IconButton ml={8} icon={<FaGithub />} isRound='true' />

        </HStack>
    )
}

export default Social
