import React, {Component,Suspense } from 'react';
import './App.css';
import  Header from './Components/Header/Header';
import NavBar from "./Components/NavBar/NavBar";

const About = React.lazy(() => import('./Components/About/About'));
const Contact = React.lazy(() => import('./Components/Contact/Contact'));
const Project = React.lazy(() => import('./Components/Project/Project'));
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
             (<div>
              <Header showContactComponent={this.showContactComponent}/>
              </div>)
             : this.state.showAboutComponent=== true
            ?  <Suspense fallback={<div className="gif"></div>}><About/></Suspense>
            : this.state.showContactComponent===true
            ?<Suspense fallback={<div className="gif"></div>}><Contact/></Suspense>
            :<Suspense fallback={<div className="gif"></div>}><Project/></Suspense>
          }
          </div>
      );
  }
}
export default App;