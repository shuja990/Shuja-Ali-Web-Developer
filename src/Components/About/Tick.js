import React, { useState } from 'react';
import Ticker from 'react-ticker';

 
const Tick = ({Images}) =>{
const [pageIsVisible, setPageIsVisible] = useState(true)
 
  const handleVisibilityChange = (isVisible) => {
    setPageIsVisible(isVisible)
  }
 
  return (
        <Ticker mode="await">
          {({ index }) => (
              <div className='' style={{ whiteSpace: "nowrap" }}>
                  <h1></h1>
                {  Images.map((user,i) => {
        return (
          <img  className="grow pointer mr1" src={Images[i].link} width="150" height="150" alt=""/>
        );
      })
    }
                  
              </div>
          )}
        </Ticker>
      )}

export default Tick;