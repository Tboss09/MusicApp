
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
    3,
    3,
    4,
    3,
    3,
    33,
    3,
    3,
    3,
    3,
    3,
    3,
    33,
    3,
    33,
    3,
    3,
    3,
    33,
    3,
    3
  ]
  return (
    // Grid layout for the Music showcase

    <SimpleGrid
      columns={[1, null, 4]}
      spacing={{ base: '50px', md: '40px', lg: '35px' }}
      mt='12'
      maxW={{ base: '85%', md: '90%', lg: '95%' }}
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
