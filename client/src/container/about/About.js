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

import { FiExternalLink } from 'react-icons/fi'

const CTA = () => {
  return (
    <div>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
        <Flex bg='brand.400'>
          <Image
            src='https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80'
            alt='3 women looking at a laptop'
            fit='cover'
            w='full'
            h={{ base: 64, md: 'full' }}
            bg='gray.100'
            loading='lazy'
            opacity={0.4}
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
            fontSize='lg'
            textTransform='uppercase'
            fontWeight='extrabold'
          >
            Award winning support
          </chakra.span>
          <chakra.h1
            mb={4}
            fontSize={{ base: '4xl', md: '4xl', lg: '5xl' }}
            fontWeight='bold'
            color={useColorModeValue('brand.600', 'gray.300')}
            lineHeight='shorter'
            textShadow='2px 0 currentcolor'
          >
            We're here to help
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
            <chakra.span display='block'>Ready to dive in?</chakra.span>
            <chakra.span
              display='block'
              color={useColorModeValue('white', 'gray.500')}
            >
              Start your free trial today.
            </chakra.span>
          </chakra.h2>
          <chakra.p
            mb={6}
            fontSize={{ base: 'lg', md: 'xl' }}
            color={useColorModeValue('gray.100', 'gray.300')}
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
            src='https://kutty.netlify.app/hero.jpg'
            alt='Hellonext feedback boards software screenshot'
          />
        </Box>
      </Flex>
    </div>
  )
}

export default CTA
