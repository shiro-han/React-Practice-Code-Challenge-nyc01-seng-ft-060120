import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import SushiWallet from './components/SushiWallet'
import Table from './containers/Table';

class App extends Component {
  state = {
    eatenIndexes: [],
    money: 100
  }
  
  eatSushi = (id, cost) => {
    if (this.eatenCheck(id))
      {window.alert('Sushi Has Already Been Consumed')}
    else if (this.state.money - cost < 0)
      {window.alert(`You don't have enough money`)}
    else
      {this.setState({
        money: this.state.money - cost,
        eatenIndexes: [...this.state.eatenIndexes, id]
      })}
  }

  eatenCheck = (id) => {
    return this.state.eatenIndexes.includes(id)
  }
  
  depositFn = (value) => {
    this.setState({money: this.state.money+value})
  }

  render() {
    return (
      <div className="app">
        <SushiContainer eatSushi={this.eatSushi} eatenCheck={this.eatenCheck}/>
        <Table eatenIndexes={this.state.eatenIndexes} money={this.state.money}/>
        <SushiWallet depositFn={this.depositFn}/>
      </div>
    );
  }
}

export default App;