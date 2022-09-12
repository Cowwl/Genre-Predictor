import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import { Div, Text, Button, Icon } from 'atomize';
import Wave from 'react-wavify'

function App() {
  return (
    <Div d="flex" flexDir="column" bg="#191A19" justify="space-between" align="center" h="100vh">
      <Navbar />
      <Div p="2%">
        <Text textSize="display2" textWeight="300" textColor="#D8E9A8" fontFamily="Questrial">
          Upload your music and know it's genre among the 8 major genres.
        </Text>
      </Div>
      <Button
        prefix={
          <Icon
            name="Upload"
            size="45px"
            color="#191A19"
            m={{ r: "1rem" }}
          />
        }
        h="10%"
        w="20%"
        bg="#4E9F3D"
        fontFamily="Questrial"
        textWeight="700"
        textColor="#191A19"
        rounded="circle"
        p={{ r: "1.5rem", l: "1rem" }}
        hoverShadow="4"
        textSize="display1"
      >
        Upload
      </Button>
      <Wave fill='#4E9F3D'
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

export default App;
