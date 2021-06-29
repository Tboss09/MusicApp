import React from "react";
import { chakra,Icon , Box, Image, Flex } from "@chakra-ui/react";
import {FaPlay,FaPause} from'react-icons/fa'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';



const Ma = () => {
  const textInput = React.createRef();
  const [play,setPlay] = React.useState(false)

  function handlePlay () {
   textInput.current.audio.current.play()
  }
  
  
  return (
    <
    >
      <Box position ="relative"
        maxW="lg"
        mx="auto"
        shadow="lg"
        rounded="md"
      >
        <Box px={4} py={2}>
          <chakra.h1
            color="black"
            fontWeight="bold"
            fontSize="3xl"
            textTransform="uppercase"
          >
            NIKE AIR
          </chakra.h1>
          <chakra.p
            mt={1}
            fontSize="sm"
            color="black"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
            quidem sequi illum facere recusandae voluptatibus
          </chakra.p>
        </Box>

        <Image
          h={48}
          w="full"
          fit="cover"
          mt={2}
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
          alt="NIKE AIR"
        />

        <Flex
          alignItems="center"
          justifyContent="space-between"
          px={6}
          py={3}
          bg="gray.900"
          roundedBottom="lg"
        >
          <chakra.h1 color="white" fontWeight="bold" fontSize="lg" onClick ={handlePlay}>
            <Icon as ={!play ? FaPlay :FaPause }/>
          </chakra.h1>
          <chakra.button
            px={4}
            py={2}
            bg="white"
            fontSize="xs"
            color="gray.900"
            fontWeight="bold"
            rounded="sm"
            textTransform="uppercase"
            _hover={{
              bg: "gray.200",
            }}
            _focus={{
              bg: "gray.400",
            }}
          >
            Download
          </chakra.button>
        </Flex>
        <Box as ={AudioPlayer} ref={textInput}  position ="absolute"  bottom ="16" autoPlay ={false} customVolumeControls={[]}  
        stomAdditionalControls={[]} customAdditionalControls={[]}   showJumpControls={false}
    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    onPlay={e => console.log("onPlay")}
    // other props here
  />
      </Box>
    </>
  );
};

export default Ma;