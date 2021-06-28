
import React from 'react'
import ImageOne from '../../components/assets/img/bg1.jpg'
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
      columns={[1, 2,3,4]}
      spacing={{ base: '70px',sm:'14px', md: '12px', lg: '35px' }}
      mt='12'
      maxW={{ base: '85%',sm:"96%", md: '95%', lg: '95%' }}
      mx='auto'
    >
      {/* Each Box is a music song card containing the name of the song, author ,play and download option */}
{/* Arrays of music folders here */}
      {dummyArrayForMusicLayout.map(musicBox => (
        <Box   key={musicBox}>
     <MusicBox image={ImageOne}  />
      </Box>


      ))}
    </SimpleGrid>
  )
}

export default Music
