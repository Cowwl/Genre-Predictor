import './Navbar'
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import { Div, Text, Button, Icon, Input } from 'atomize';
import Wave from 'react-wavify'
import axios from 'axios';
import Results from './Results';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./MainPage.css";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, Navigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const MainPage = () => {

  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (selectedFile) {
      if (selectedFile.type === "audio/wav")
        handleSubmit();
      else
        toast.error('Please upload a .wav file.', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });//TODO: make this a toast
    }
  }, [selectedFile]);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const handleSubmit = async (event) => {

    let bodyContent = new FormData();
    bodyContent.append("file", selectedFile);

    let response = await fetch("http://ec0b-2a09-bac0-269-00-681d-1009.ngrok.io/predict", {
      method: "POST",
      body: bodyContent,
    });

    let data = await response.text();
    let result = JSON.parse(data);
    console.log(result);
    navigate('/results', { state: result });
  }
  return (

    <Div d="flex" flexDir="column" bg="#1F1D36" justify="space-between" align="center" h="100vh" overflow="hidden">
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Div>
        <Text textSize="display2" textWeight="300" textColor="#E9A6A6" fontFamily="Questrial">
          Upload your music (as a .wav file) and know it's genre among the 8 major genres.
        </Text>
      </Div>
      <Div rounded="circle">
        <Input className="formiz" cursor="pointer" pos="absolute" top="0" left="0" h="80px" p="0" bg="#1F1D36" onChange={changeHandler} type="file" border="1px solid" borderColor="#1F1D36" hoverBorderColor="#1F1D36" focusBorderColor="#1F1D36" />
        <Button className="button"
          h="80px"
          prefix={
            <Icon
              name="Upload"
              size="45px"
              color="#E9A6A6"
              m={{ r: "1rem" }}
            />
          }
          minH="10%"
          minW="20%"
          bg="#3F3351"
          fontFamily="Questrial"
          textWeight="700"
          textColor="#E9A6A6"
          rounded="xl"
          shadow="2"
          hoverShadow="4"
          textSize="display1"
        // onClick={handleSubmit}
        >
          Upload
        </Button>
      </Div>
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