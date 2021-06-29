import React from 'react'

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton
} from '@chakra-ui/react'
import { AiOutlineMenu } from 'react-icons/ai'
import '../navigation/nav.css'
import { Link } from 'react-router-dom'

export default function Gslr () {
  const bg = useColorModeValue('white', 'gray.800')
  const mobileNav = useDisclosure()

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w='full'
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow='md'
        zIndex='4'
        position='fixed'
        top='0px'
        left='0px'
        right='0px'
      >
        <Flex alignItems='center' justifyContent='space-between' mx='auto'>
          <Flex>
            <chakra.a
              href='/'
              title='Choc Home Page'
              display='flex'
              alignItems='center'
            >
              <VisuallyHidden>ABM</VisuallyHidden>
            </chakra.a>
            <chakra.h1
              fontSize='35px'
              fontWeight='medium'
              ml='2'
              className='logo'
            >
              ABM
            </chakra.h1>
          </Flex>
          <HStack display='flex' alignItems='center' spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color='brand.500'
              display={{ base: 'none', md: 'inline-flex' }}
            >
              <Button variant='ghost' as={Link} to='/'>
                Home
              </Button>
              <Button variant='ghost' as={Link} to='/music'>
                Music
              </Button>
              <Button variant='ghost' as={Link} to='/about'>
                About
              </Button>
              <Button variant='outline' as={Link} to='/contact'>
                Contact
              </Button>
            </HStack>

            <Box display={{ base: 'inline-flex', md: 'none' }}>
              <IconButton
                display={{ base: 'flex', md: 'none' }}
                aria-label='Open menu'
                fontSize='20px'
                color={useColorModeValue('gray.800', 'inherit')}
                variant='ghost'
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos='absolute'
                zIndex={1}
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? 'flex' : 'none'}
                flexDirection='column'
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded='sm'
                shadow='sm'
              >
                <CloseButton
                  aria-label='Close menu'
                  onClick={mobileNav.onClose}
                />
                <chakra.h1
                  fontWeight='medium'
                  ml='2'
                  className='logo'
                >
                  <Button variant='ghost' as={Link} to='/' fontSize='35px'>
                  ABM
                </Button>
                </chakra.h1>
                <Button variant='ghost' as={Link} to='/'>
                  Home
                </Button>
                <Button variant='ghost' as={Link} to='/music'>
                  Music
                </Button>
                <Button variant='ghost' as={Link} to='/about'>
                  About
                </Button>
                <Button variant='outline' as={Link} to='/contact'>
                  Contact
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  )
}
