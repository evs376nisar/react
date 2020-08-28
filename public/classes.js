class React {
    
    constructor(){
        
        this.props =4;
        this.name ="nisar";    
        
    }
    thisfunction(){
    console.log('i am learning')
        }
}
class Civic extends React {
    constructor(){
        super();
    
    }
    
   
}

const react = new React();
const civic = new Civic();
react.thisfunction();

console.log(civic.this.props)
//console.log(civic.this.state.year)
