import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import LogoContent from './LogoContent'
import Content from './Content';
import Footer from './Footer';
import axios from 'axios';


class App extends React.Component{

  constructor(props){
    super(props)
    this.state={accountid: "", 
    username: "",
    battles: "", 
    wins: 0, 
    xp: 0, 
    damageDealt: 0,
    survivedBattles: 0,
    frags: 0,
    hits: 0,
    shots: 0,
    planesFrags: 0,
    maxXp: 0,
    maxDamageDealt: 0,
    maxFrags: 0,
    maxPlanesDestroyed: 0,
    maxFragsMainBattery: 0,
    maxFragsTorpedoes: 0,
    maxFragsPlanes: 0,
    maxXpShipId: "",
    maxXpShipBattles: 0
  }
  }
  


onSearchSubmit = nickname => {
  console.log(nickname)
  axios.get(`https://api.worldofwarships.eu/wows/account/list/?application_id=b0f4d669a9745f5dd7eb16395de839be&search=${nickname}`,{
    }).then(result => {
      this.setState({accountid: result.data.data[0].account_id,
      username: result.data.data[0].nickname})
      console.log(this.state.accountid)
      console.log(this.state.username)
      axios.get(`https://api.worldofwarships.eu/wows/account/info/?application_id=b0f4d669a9745f5dd7eb16395de839be&account_id=${this.state.accountid}`,{
        }).then(result => {
          this.setState({battles: result.data.data[this.state.accountid].statistics.pvp.battles, 
            xp: result.data.data[this.state.accountid].statistics.pvp.xp,
            wins: result.data.data[this.state.accountid].statistics.pvp.wins,
            damageDealt: result.data.data[this.state.accountid].statistics.pvp.damage_dealt,
            survivedBattles: result.data.data[this.state.accountid].statistics.pvp.survived_battles,
            frags: result.data.data[this.state.accountid].statistics.pvp.frags,
            hits: result.data.data[this.state.accountid].statistics.pvp.main_battery.hits,
            shots: result.data.data[this.state.accountid].statistics.pvp.main_battery.shots,
            planesFrags: result.data.data[this.state.accountid].statistics.pvp.planes_killed,
            maxXp: result.data.data[this.state.accountid].statistics.pvp.max_xp,
            maxDamageDealt: result.data.data[this.state.accountid].statistics.pvp.max_damage_dealt,
            maxFrags: result.data.data[this.state.accountid].statistics.pvp.max_frags_battle,
            maxPlanesDestroyed: result.data.data[this.state.accountid].statistics.pvp.max_planes_killed,
            maxFragsMainBattery: result.data.data[this.state.accountid].statistics.pvp.main_battery.frags, 
            maxFragsTorpedoes: result.data.data[this.state.accountid].statistics.pvp.torpedoes.frags, 
            maxFragsPlanes: result.data.data[this.state.accountid].statistics.pvp.aircraft.frags,
            maxXpShipId: result.data.data[this.state.accountid].statistics.pvp.max_xp_ship_id
          })
          console.log("bitwy " + this.state.battles)
          console.log("cały exp " + this.state.xp)
          console.log("Średni exp " + this.state.xp / this.state.battles)
          console.log("zwycięstwa " + this.state.wins)
          console.log("procent zwycięstw " + ((this.state.wins / this.state.battles).toFixed(3)* 100) + "%")
          console.log("Zadane obrażenia wszystkie " + this.state.damageDealt)
          console.log("Średnie obrażenia na bitwę " + (this.state.damageDealt / this.state.battles).toFixed(0))
          console.log("Przetrwane bitwy " + this.state.survivedBattles)
          console.log("wszystkie fragi " + this.state.frags)
          console.log("K/D ratio " + (this.state.frags / this.state.survivedBattles).toFixed(2))
          console.log("Celność " + (this.state.hits / this.state.shots).toFixed(2) * 100 + "%")
          console.log("Zniszczone samoloty " + this.state.planesFrags)
          console.log("Średnie obrażenia na bitwę " + (this.state.damageDealt / this.state.battles).toFixed(0))
          console.log("Średnie fragi na bitwę " + (this.state.frags / this.state.battles).toFixed(2))
          console.log("Średnie samoloty na bitwe zniszczone " + (this.state.planesFrags / this.state.battles).toFixed(2))
          console.log("max xp " + this.state.maxXp)
          console.log("max uszkodzenia " + this.state.maxDamageDealt)
          console.log("max fragi " + this.state.maxFrags)
          console.log("max zniszczone samoloty " + this.state.maxPlanesDestroyed)
          console.log("fragi głowna bateria " + this.state.maxFragsMainBattery)
          console.log("fragi torpedosy " + this.state.maxFragsTorpedoes)
          console.log("fragi samoloty " + this.state.maxFragsPlanes)
          console.log("fragi inne " + (this.state.frags - (this.state.maxFragsMainBattery + this.state.maxFragsTorpedoes + this.state.maxFragsPlanes)))
          console.log("id najlepszego okrętu wojennego zniszczenia " + this.state.maxXpShipId)
          axios.get(`https://api.worldofwarships.eu/wows/ships/stats/?application_id=b0f4d669a9745f5dd7eb16395de839be&account_id=${this.state.accountid}&ship_id=${this.state.maxXpShipId}`,{
        //     }).then(result => {
        //     this.setState( {
        //       maxXpShipBattles: result.data.data.this['state']['accountid'].pvp.battles 
        //     })
        //     console.log(result)
        //     console.log(this.state.maxXpShipBattles)
         })
      })
    })
}


render(){
  return (
    <div className="bg-gray-400 w-full h-full">
      <Navbar/>
      <LogoContent> </LogoContent>
      <Content onSearchSubmit={this.onSearchSubmit} accountid={this.state.accountid} battles={this.state.battles} 
        xp={this.state.xp}
        wins={this.state.wins} damageDealt={this.state.damageDealt} survivedBattles={this.state.survivedBattles} 
        frags={this.state.frags} 
      hits={this.state.hits} 
          shots={this.state.shots}
          planesFrags={this.state.planesFrags} maxXp={this.state.maxXp} maxDamageDealt={this.state.maxDamageDealt}  
          maxFrags={this.state.maxFrags} maxPlanesDestroyed={this.state.maxPlanesDestroyed} maxFragsMainBattery={this.state.maxFragsMainBattery}
          maxFragsTorpedoes={this.state.maxFragsTorpedoes} maxFragsPlanes={this.state.maxFragsPlanes}  username={this.state.username}
      />
      <LogoContent> </LogoContent>
      <Footer/>
    </div>
  )}
}

export default App;


