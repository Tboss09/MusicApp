import React from 'react'
import { Box, Image, Icon, Flex, Text, Heading ,Button} from '@chakra-ui/react'
import { HoverCard } from 'react-png-hovercard'

import { FaPlay } from 'react-icons/fa'
const MusicBox = ({ image }) => {
  return (
    <Box h={{ base: '80', md: '80', lg: '96' }} bg='red' position='relative'>
      <Box
        as={HoverCard}
        h='70%'
        front={
          <Box w='full'>
            <Image
              src={image}
              w='full'
              fallbackSrc='https://via.placeholder.com/150'
              p='2'
              borderRadius='0px'
              objectFit='cover'
            />
          </Box>
        }
        back={
          <Flex
            align='center'
            justify='center'
            cursor='pointer'
            w='full'
            bg='blackAlpha.300'
            h={{ base: '55%', md: '55%', lg: '45%' }}
            m='2'
          >
            <Icon as={FaPlay} w='12' h='12' color='white' />
          </Flex>
        }
        animationSpeed={200}
        height={0}
      />

      {/* Name and author of Song */}
      <Flex align="flex-start" justify ="flex-start" flexDir="column" position='absolute' bottom={{base:'0rem',md:"2rem",lg:"2rem"}} bg="yellow" h="32" w="full" p="2">
        
        <Box>
          <Text fontSize='lg' as={Heading} fontWeight='500'>
            Name of Music
          </Text>

          <Box>
            <Text as='span'>Akosile Oluwatayo</Text>
          </Box>
        </Box>

<Flex mt="2" w="full">
  <Button colorScheme="blue" size="lg"  w="90%" mx="auto" >
    Download
  </Button>
</Flex>

      </Flex>
    </Box>
  )
}

export default MusicBox
