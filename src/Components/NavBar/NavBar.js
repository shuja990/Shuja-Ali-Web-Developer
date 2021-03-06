import React, { Component } from 'react';
import './NavBar.css';
class NavBar  extends Component{


	render(){
    const { showHeaderComponent,showAboutComponent,showProjectComponent,showContactComponent} = this.props;
  return(
    <div className="outer-menu">
  <input className="checkbox-toggle" type="checkbox" />
  <div className="hamburger pa4">
    <div></div>
  </div>
  <div className="menu">
    <div>
      <div>
        <ul>
          <li><a onClick={()=>showHeaderComponent()} className="pointer">Home</a></li>
          <li><a onClick={()=>showAboutComponent()} className="pointer">Services</a></li>
          <li><a onClick={()=>showProjectComponent()} className="pointer">Portfolio</a></li>
          <li><a onClick={()=>showContactComponent()} className="pointer">Contact</a></li>
          <li><a href="https://pdfhost.io/v/GkrK9sIon_My_CV.pdf">Resume</a></li>
          <li><div>
    <a className="link dim gray dib h2 w2 br-100 mr3 " href="https://www.facebook.com/shuja.ali7/" target="_blank" rel="noopener noreferrer"> 
          <svg data-icon="facebook" viewBox="0 0 32 32" className="fill">
              <title>shujaali7</title>
              <path d="M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"></path>
          </svg>
        </a>
        <a className="link dim gray dib h2 w2 br-100 mr3 " href="https://twitter.com/Shuja011" target="_blank" rel="noopener noreferrer">
          <svg data-icon="twitter" viewBox="0 0 32 32" className="fillt">
              <title>@shuja011</title>
              <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"></path>
          </svg>
        </a>
        <a className="link dim gray dib br-100 h2 w2 mr3 " href="https://github.com/shuja990" target="_blank" rel="noopener noreferrer">
          <svg data-icon="gitbhub" viewBox="0 0 32 32" className="fillg">
              <title>shuja990</title>
              <path d="M0 18 C0 12 3 10 3 9 C2.5 7 2.5 4 3 3 C6 3 9 5 10 6 C12 5 14 5 16 5 C18 5 20 5 22 6 C23 5 26 3 29 3 C29.5 4 29.5 7 29 9 C29 10 32 12 32 18 C32 25 30 30 16 30 C2 30 0 25 0 18 M3 20 C3 24 4 28 16 28 C28 28 29 24 29 20 C29 16 28 14 16 14 C4 14 3 16 3 20 M8 21 A1.5 2.5 0 0 0 13 21 A1.5 2.5 0 0 0 8 21 M24 21 A1.5 2.5 0 0 0 19 21 A1.5 2.5 0 0 0 24 21 z"></path>
          </svg>
        </a>
          <a className="link dim gray dib br-100 h2 w2 mr3 " href="https://www.linkedin.com/in/shuja-ali-075408ab/" target="_blank" rel="noopener noreferrer">
            <svg  viewBox="0 0 16 16" className="filll">
            <title>shuja-ali-075408ab</title>
            <path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z"/>
            </svg>
          </a>
	<a className="link dim gray dib br-100 h2 w2 mr3 " href=" https://www.fiverr.com/shuja990" target="_blank" rel="noopener noreferrer">
            <img src="http://seekvectorlogo.com/wp-content/uploads/2018/01/fiverr-vector-logo.png" alt="shuja990"/>
          </a>
  </div></li>
        </ul>
      </div>
    </div>
  </div>
</div>

  



	);
}
}

export default NavBar;
