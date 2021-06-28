import React from 'react'
import { Box, Image, Icon, Flex ,Text} from '@chakra-ui/react'
import { HoverCard } from 'react-png-hovercard'

import { FaPlay } from 'react-icons/fa'
const MusicBox = ({ image }) => {
  return (
   <Box h="80" bg="red" >
< Box as={HoverCard}  h="70%" 
  front={
    <Box w='full'>
      <Image src={image} w='full'  borderRadius="0px"
        style={{ objectFit: 'cover' }}
      />
    </Box>
  }
  back={
    <div >
      <p> I would do anything to be there</p>
    </div>
  }
  maxWidth={400}
  animationSpeed={500}
  height={300}
  margin={10}
/>
   </Box>
  )
}

export default MusicBox
