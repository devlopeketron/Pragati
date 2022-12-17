import {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      // monster:[
      //   {
      //     name:'linda'
      //   },
      //   {
      //     name:'franky'
      //   },
      //   {
      //     name:'jacky'
      //   },{
      //     name:'andrei'
      //   }

      // ]

      // monster1:{
      //   name:'linda'
      // },
      // monster2:{
      //   name:'frank'
      // },
      // monster3:{
      //   name:'jacky'
      // }
      //name: 'aniket',
    monster: [],
     };
     console.log(constructor , '-----------');
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then((Response) => 
    Response.json()).then((user)=>
    this.setState(() => {
      return {monster :user}
    
    },()=>{
      console.log(this.state)
    }
    ))
  }
   
  render(){
  return (
    <div className="App">
      <input className='search-box' type='search' placeholder='search monster' onChange = {(events)=>{
      console.log(events.target.value);
      const searchstring = events.target.value.toLocaleLowerCase();
      const filteredMonster= this.state.monster.filter((monster) =>{
        return monster.name.toLocaleLowerCase().includes(searchstring);
      });
      this.setState(()=> {
        return { monster : filteredMonster};
      });
      }}
       />
    
         {
          this.state.monster.map((monster)=>{
            return<h1>{monster.name}</h1>
          })}
       
          

        
         
    
    </div>
  );
}
}
export default App;
