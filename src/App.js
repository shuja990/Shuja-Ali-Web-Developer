import React, { Component } from 'react';
import './App.css';
import  Header from './Components/Header/Header';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import NavBar from "./Components/NavBar/NavBar";
import Project from "./Components/Project/Project";
import Animate from 'animate.css-react'
import 'animate.css/animate.css'
const initialState={
      showHeaderComponent:true, 
      showAboutComponent:false,
      showContactComponent:false,
      showProjectComponent:false
    }
class App extends Component{
    constructor(){
      super();
      this.state = initialState;
    }
    
    showContactComponent=()=>{
    this.setState({showHeaderComponent:false, showAboutComponent:false,
    showContactComponent:true,showProjectComponent:false})
    }
    showHeaderComponent=()=>{
    this.setState({showHeaderComponent:true, showAboutComponent:false,
    showContactComponent:false,showProjectComponent:false})
    }

    showAboutComponent=()=>{
    this.setState({showHeaderComponent:false, showAboutComponent:true,
    showContactComponent:false,showProjectComponent:false})
    }
    showProjectComponent=()=>{
    this.setState({showHeaderComponent:false, showAboutComponent:false,
    showContactComponent:false,showProjectComponent:true})
    }
  render(){
    return(
        <div className="App">
            <NavBar showAboutComponent={this.showAboutComponent} showContactComponent={this.showContactComponent} showHeaderComponent={this.showHeaderComponent} showProjectComponent={this.showProjectComponent}  />
            { this.state.showHeaderComponent===true
             ?  
             (<Animate
               appear="slideInDown"
               durationAppear={1000}
              component="div" >

              <div>
              <Header showContactComponent={this.showContactComponent}/>
              </div>
              </Animate>)
             : this.state.showAboutComponent=== true
            ?  <About/>
            : this.state.showContactComponent===true
            ?<Contact/>
            :<Project/>
          }
          </div>
      );
  }
}

export default App;
