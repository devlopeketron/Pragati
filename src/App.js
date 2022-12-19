import {Component, useLayoutEffect} from 'react';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      
    monsters: [],
    searchField:''
     };
    
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then((Response) => 
    Response.json()).then((user)=>
    this.setState(() => {
      return {monsters :user}
    
    }
    ))
  }
  onSearchChange = (events)=> {
    const searchField = events.target.value.toLocaleLowerCase();
    this.setState(()=> {
      return { searchField };
    });
    };
   
  render(){
    const{monsters,searchField}= this.state;
    const{ onSearchChange}= this;
    const filteredMonster= monsters.filter((monster) =>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    

  return (
    <div className="App">
     <SearchBox className='mosnter-search-box' onChangeHandler={onSearchChange} placeholder='search monster' className='search box' ></SearchBox>    
     <CardList monsters ={filteredMonster}>
     </CardList>
        
         
    
    </div>
  );
}
}
export default App;
