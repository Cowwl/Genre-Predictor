import './Navbar'
import Navbar from './Navbar';
import { useState } from 'react';
import { Div, Text, Button, Icon } from 'atomize';
import Wave from 'react-wavify'
import axios from 'axios';
import Results from './Results';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const MainPage = () => {
    return (  
        <Div d="flex" flexDir="column" bg="#1F1D36" justify="space-between" align="center" h="100vh" overflow="hidden">
        <Navbar />
        <Div p="2%">
          <Text textSize="display2" textWeight="300" textColor="#E9A6A6" fontFamily="Questrial">
            Upload your music and know it's genre among the 8 major genres.
          </Text>
        </Div>
        <Button
          prefix={
            <Icon
              name="Upload"
              size="45px"
              color="#E9A6A6"
              m={{ r: "1rem" }}
            />
          }
          h="10%"
          w="20%"
          bg="#3F3351"
          fontFamily="Questrial"
          textWeight="700"
          textColor="#E9A6A6"
          rounded="circle"
          shadow="2"
          p={{ r: "1.5rem", l: "1rem" }}
          hoverShadow="4"
          textSize="display1"
        >
          Upload
        </Button>
        <Wave fill='#3F3351'
          paused={false}
          options={{
            height: 40,
            amplitude: 30,
            speed: 0.4,
            points: 3
          }}
        />
      </Div>
    );
}
 
export default MainPage;