import React from 'react';
//import ReactDOM from 'react-dom';
import Card from '/data/data/com.termux/files/home/my-app/src/componets/Card.js';
import Data from '../src/allDataStore/cardData.js';
//import users from '../src/allDataStore/nextedData.js';
    //const [{title,desc}]=v;
    let item=[];
    for(let x=0; x< Data.length; x++){
    item.push(<Card title={Data[x].title} desc={Data[x].desc} imgSrc={Data[x].img}/>)
    }

  //  item.push(<Card title={users[x].name} desc={users[x].address} imgSrc={users[x].img}/>)
    
function App(){
  return <div>
  <h1>hwsjskkssj</h1>
{item}
</div>
}
export default App;

