import React,{useState} from 'react';

import logo from './logo.svg';
import './App.css';
import SideBar from './modules/SideBar';
import Canvas from './modules/Canvas';
import { Container, Row } from 'react-bootstrap';
import './assets/css/style.css'
import CanvasTest from './modules/CanvasTest';
import MainSection from './components/MainSection';

function App() {
  return (
    <>
    {/* <Container className='main_Section'>
    <Row style={{display: 'flex'}}>
    <Canvas/> */}
    {/* <CanvasTest /> */}
    {/* <SideBar/>
    </Row>
    </Container> */}

    <MainSection/>
    </>
  );
}

export default App;



