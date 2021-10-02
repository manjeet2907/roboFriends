import React,  {Component} from 'react';
import './App.css';
import Cardlist from './Components/Card-List/Cardlist';
import Searchitem from './Components/SearchItem/Search-item';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };    
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };


componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then(users=>this.setState({monsters: users}))
}

render(){
  const { monsters, searchField } = this.state;

  const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

  return(
    <div className='App'>
        <h1>RoboFriends</h1>
        <Searchitem onSearchChange={this.onSearchChange} />
        <Cardlist monsters={filteredMonsters} />
    </div> 
    )
}

}

export default App;
