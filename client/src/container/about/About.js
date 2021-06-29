import React from 'react'
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  SimpleGrid,
  Icon,
  Stack,
  Image
} from '@chakra-ui/react'
import ImageOne from '../../components/assets/img/bg1.jpg'
import { FiExternalLink } from 'react-icons/fi'
import './about.css'

const CTA = () => {
  return (
    <div>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
        <Flex bg='brand.400'>
          <Image
            src='https://images.unsplash.com/photo-1619229725896-1b2ca516a6d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
            alt='3 women looking at a laptop'
            fit='cover'
            w='full'
            h={{ base: 64, md: 'full', lg:'25rem'}}
            m={'30px'}
            mx={'20px'}
            borderRadius='lg'
            loading='lazy'
          />
        </Flex>
        <Flex
          direction='column'
          alignItems='start'
          justifyContent='center'
          px={{ base: 4, md: 8, lg: 20 }}
          py={24}
          zIndex={3}
        >
          <chakra.span
            color={useColorModeValue('brand.600', 'gray.300')}
            fontSize={{ base: '4xl', md: '4xl', lg: '6xl' }}
            textTransform='uppercase'
            fontWeight='extrabold'
            className='abm'
          >
            ABM
          </chakra.span>
          <chakra.h1
            mb={4}
            fontSize={{ base: '24xl', md: '2xl', lg: '3xl' }}
            fontWeight='bold'
            color={useColorModeValue('brand.600', 'gray.300')}
            lineHeight='shorter'
            textShadow='2px 0 currentcolor'
            className='pv2'
          >
            We're here to do deliver the best music to you...
          </chakra.h1>
          <chakra.p
            pr={{ base: 0, lg: 16 }}
            mb={4}
            fontSize='lg'
            color={useColorModeValue('brand.600', 'gray.400')}
            letterSpacing='wider'
          >
            Get the #1 Business Messenger and start delivering personalized
            experiences at every stage of the customer journey.
          </chakra.p>
        </Flex>
      </SimpleGrid>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('brand.500')}
        px={8}
        py={24}
        mx='auto'
      >
        <Box
          w={{ base: 'full', md: 11 / 12, xl: 9 / 12 }}
          mx='auto'
          pr={{ md: 20 }}
        >
          <chakra.h2
            fontSize={{ base: '3xl', sm: '4xl' }}
            fontWeight='extrabold'
            lineHeight='shorter'    
            color={useColorModeValue('white', 'gray.100')}
            mb={6}
          >
            <chakra.span
              display='block'
              color={useColorModeValue('red', 'gray.500')}
            >
              Start your free trial today.
            </chakra.span>
          </chakra.h2>
          <chakra.p
            mb={6}
            fontSize={{ base: 'lg', md: 'xl' }}
            color={useColorModeValue('green', 'gray.300')}
          >
            Hellonext is a feature voting software where you can allow your
            users to vote on features, publish roadmap, and complete your
            customer feedback loop.
          </chakra.p>
        </Box>
        <Box w={{ base: 'full', md: 10 / 12 }} mx='auto' textAlign='center'>
          <Image
            w='full'
            rounded='lg'
            shadow='2xl'
            src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
          />
        </Box>
      </Flex>
    </div>
  )
}

export default CTA
