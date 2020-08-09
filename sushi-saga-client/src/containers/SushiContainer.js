import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

const API = "http://localhost:4000/sushis"

class SushiContainer extends React.Component {
  state = {
    sushi: [],
    index: 0
  }

  fetchSushi = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({sushi: data}))
  }

  moreHandler = () => {
    if (this.state.index === 96) {
      this.setState({index: 0})
    } else {
      this.setState({index: this.state.index+4})
    }
  }

  componentDidMount() {
    this.fetchSushi();
  }

  render () {
    return (
      <Fragment>
        <div className="belt">
          {this.state.sushi.slice(this.state.index, this.state.index+4).map(obj => <Sushi key={obj.id} sushi={obj} eatSushi={this.props.eatSushi} eatenCheck={this.props.eatenCheck}/>)}
          <MoreButton moreHandler={this.moreHandler}/>
        </div>
      </Fragment>
    )}
}

export default SushiContainer