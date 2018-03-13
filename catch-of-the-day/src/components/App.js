import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import sampleFishes from "../sample-fishes"
import Fish from './Fish'

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }

  addFish = fish => {
    // 1. Take a copy of the existing state;  never want to create a mutation; make a copy of existing state
    const fishes = { ...this.state.fishes }
    // 2. add our new fish to our fishes variable
    fishes[`fish${Date.now()}`] = fish
    console.log(fishes)
    // 3. Set the new fishes object to state
    this.setState({
      fishes // same as ==> fishes: fishes this is a JS thing
    })
  }

  loadSampleFishes = () => {
    this.setState({fishes: sampleFishes})
  }

  render () {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market' />
          <ul className="fish">
            <Fish />
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    )
  }
}

export default App
