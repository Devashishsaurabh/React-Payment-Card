import React from 'react'
import Bottom from './Bottom';
import Middle from './Middle';
import Top from './Top';
import data from '../Data/Data.json'
const Card = () => {
    console.log(data);
    let colors = data.color;
    let bgColor = {backgroundColor: colors}
  return (
      <div className='container1'>
    <div className='container' style={bgColor}>
        <Top data={data}/>
        <Middle data={data}/>
        <Bottom data={data}/>
    </div>
    
    </div>
  )
}

export default Card