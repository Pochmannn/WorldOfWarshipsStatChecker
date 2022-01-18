import React, { useState, useEffect } from "react";
import '../App.css';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';
import axios from "axios";
import DataFetching from "./DataFetching";

class App extends React.Component{

  onSearchSubmit = nickname => {
    console.log(nickname)
    
  }

render(){
  return (
    <div className="bg-gray-700 w-full h-full">
      <Navbar/>
      <DataFetching />
      <Content onSearchSubmit={this.onSearchSubmit}/>
      <Footer/>
    </div>
  )}
}

export default App;
