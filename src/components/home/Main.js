import React, { Component } from "react";
import Slider from "react-slick";
import {Box, Image } from "@chakra-ui/react";

const Main = () => {
      const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      fade:true,
      autoplay:true,
      autoPlaySpeed:6000,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  
    return (
        
      <Box overflow="hidden" h="54rem"  mt="1" mb="12" w="100%" mx ="auto" >
        <Box as ={Slider} {...settings} h="full" w="full">

          <Box  w="96" h={{base:"80",md:"25rem",lg:"105rem"}}>
            <Image w="100%" objectFit="cover" h="100%" src ="https://images.unsplash.com/photo-1483000805330-4eaf0a0d82da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"/>
          </Box>
          
          <Box bg = "yellow" w="96" h="96">
            <h3>2</h3>
          </Box>

          <Box
 bg = "blue" w="96" h="96">
            <h3>3</h3>
          </Box>
          <Box
 bg = "red" w="96" h="96">
            <h3>4</h3>
          </Box>

        </Box>
      </Box>
  
    )
}

export default Main
