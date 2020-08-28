import React,{ Component } from 'react';


class Header extends Component{
         onChange(event){
         console.log(event.target.value)
     }
    render(){

        
     return(
        <header >
            <div 
        onClick={()=>{console.log('Clicked')}}   
            >logo</div>
          <input onChange={this.onChange}/>
            </header>
        )

    }
}

export default Header;