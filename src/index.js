import React from 'react';
import ReactDOM from 'react-dom';
//importing COMPONETN
import Header from './Components/header';



const App= () =>{
     return (
         <div>
         <Header/>
         <h1>hello</h1>
         </div>
     )
    
}
ReactDOM.render(<App/>,document.querySelector('#root'));