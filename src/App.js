import {Component, useLayoutEffect} from 'react';
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
    monsters: [],
    searchField:''
     };
     console.log(constructor , '-----------');
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then((Response) => 
    Response.json()).then((user)=>
    this.setState(() => {
      return {monsters :user}
    
    },()=>{
      console.log(this.state)
    }
    ))
  }
   
  render(){
    const filteredMonster= this.state.monsters.filter((monster) =>{
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });
    console.log(filteredMonster, '---------------')

  return (
    <div className="App">
      <input className='search-box' type='search' placeholder='search monster' onChange = {(events)=>{
      const searchField = events.target.value.toLocaleLowerCase();
      
      this.setState(()=> {
        return { searchField };
      });
      }}
       />
    
         {filteredMonster.map((monster)=>{
            
            return (
            <divs key ={monster.id}>
            <h1>{monster.name}</h1>
            </divs>
            );
          })}
       
          

        
         
    
    </div>
  );
}
}
export default App;
