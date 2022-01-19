import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';
import axios from 'axios';


class App extends React.Component{

  constructor(props){
    super(props)
    this.state={accountid: "", battles: "", wins: 0}
  }
/* 
TUDU
- rozbić fetch na 2 funkcje na komponent didmount
- pobierać obiekt na boga mego świętego jezuza chrystusa
- to wszystko :)
*/
  onSearchSubmit = nickname => {
    console.log(nickname)
    axios.get(`https://api.worldofwarships.eu/wows/account/list/?application_id=b0f4d669a9745f5dd7eb16395de839be&search=${nickname}`,{
    }).then(result => {
        this.setState({accountid: result.data.data[0].account_id})
        console.log(this.state.accountid)
        axios.get(`https://api.worldofwarships.eu/wows/account/info/?application_id=b0f4d669a9745f5dd7eb16395de839be&account_id=${this.state.accountid}`,{
        }).then(result => {
            this.setState({battles: result.data.data[this.state.accountid].statistics.battles})
            console.log(this.state.battles)
        })

    })
}

render(){
  return (
    <div className="bg-gray-700 w-full h-full">
      <Navbar/>
      <Content onSearchSubmit={this.onSearchSubmit} accountid={this.state.accountid} battles={this.state.battles}/>
      <Footer/>
    </div>
  )}
}

export default App;
