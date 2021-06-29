import React, { useEffect, useState } from 'react'
import { Text, Box, Flex, useColorModeValue, Image } from '@chakra-ui/react'
import { FiExternalLink } from 'react-icons/fi'
import { chakra, SimpleGrid, Icon } from '@chakra-ui/react'

const Component = () => {
  const slides = [
    {
      img:
        'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      img:
        'https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      img:
        'https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
    },
    {
      img:
        'https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      img:
        'https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      img: '../../components/assets/img/bg1.jpg'
    }
  ]
  const [currentSlide, setCurrentSlide] = useState(0)

  const slidesCount = slides.length

  const prevSlide = () => {
    setCurrentSlide(s => (s === 0 ? slidesCount - 1 : s - 1))
  }
  const nextSlide = () => {
    setCurrentSlide(s => (s === slidesCount - 1 ? 0 : s + 1))
  }
  const carouselStyle = {
    transition: 'all .5s',
    ml: `-${currentSlide * 100}%`
  }

  const SLIDES_INTERVAL_TIME = 3000
  const ANIMATION_DIRECTION = 'right'

  useEffect(() => {
    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === 'left' ? prevSlide() : nextSlide()
    }, SLIDES_INTERVAL_TIME)
    return () => clearInterval(automatedSlide)
  }, [])

  return (
    <div>
      <Flex
        w='full'
        bg={useColorModeValue('gray.200', 'gray.600')}
        p={0}
        alignItems='center'
        justifyContent='center'
      >
        <Flex w='full' overflow='hidden'>
          <Flex
            pos='relative'
            h={{ base: '300px', md: '350px', lg: '500px' }}
            w='full'
            {...carouselStyle}
          >
            {slides.map((slide, sid) => (
              <Box key={`slide-${sid}`} flex='none' boxSize='full' shadow='md'>
                <Text
                  color='white'
                  fontSize='xs'
                  p='8px 12px'
                  pos='absolute'
                  top='0'
                  whiteSpace='nowrap'
                ></Text>
                <Image src={slide.img} boxSize='full' backgroundSize='cover' />
              </Box>
            ))}
          </Flex>
        </Flex>
      </Flex>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={0}
        p={{ base: '1em', md: '2em', lg: '3em' }} 
      >
        <Flex bg='brand.400'>
          <Image
            src='https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80'
            alt='3 women looking at a laptop'
            fit='cover'
            w='full'
            h={{ base: 64, md: 'full' }}
            bg='gray.100'
            loading='lazy'
            opacity={0.8}
            shadow='xl'
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
            color={useColorModeValue('brand.600', 'dark.blue')}
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
          <Box display='inline-flex' rounded='md' shadow='md'>
            <chakra.a
              mt={2}
              py={8}
              display='inline-flex'
              alignItems='center'
              justifyContent='center'
              px={5}
              py={3}
              border='solid transparent'
              fontWeight='bold'
              w='full'
              rounded='md'
              color={useColorModeValue('dark.blue')}
              bg={useColorModeValue('brand.600', 'brand.500')}
              _hover={{
                bg: useColorModeValue('brand.700', 'brand.600')
              }}
            >
              Visit the Help Centre
              <Icon as={FiExternalLink} ml={2} />
            </chakra.a>
          </Box>
        </Flex>
      </SimpleGrid>
    </div>
  )
}
export default Component
