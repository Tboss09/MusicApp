
import React from 'react'
import ImageOne from '../../components/assets/img/bg1.jpg'
import uniqid from 'uniqid'

import {
  Box,
  HStack,
  Flex,
  Spinner ,
  Heading,
  SimpleGrid,
  ButtonGroup,
  Button,
  VStack,
  Image,
  Text
} from '@chakra-ui/react'
import MusicBox from './MusicBox/MusicBox'
const Music = () => {
  const dummyArrayForMusicLayout = [
    1,
    2,
    3,
    4,
    9,
    10,
    11,
    12,
    34,
    39,
    47,
    80,
    83,
    40,
   
  ]
  return (
    // Grid layout for the Music showcase

    <SimpleGrid
    columns ={[1,2,2,3]}
    mt="24"
    mb="32"
    spacing={10}
    w="95%"
    mx="auto"
    alignItems="center"
    justifyContent="center"
    >
{/* Arrays of music folders here */}
{dummyArrayForMusicLayout.map(user=>(
     <MusicBox  image={ImageOne}  key ={uniqid()}/>
))}

{/* Music player */}

{/* Music player */}
    </SimpleGrid>


  )
}

export default Music
