import React, { Component } from "react";
import Cloak from './Cloak';

class App extends Component {

  state = {
    loading: false,
    actived: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: true
      })
    }, 3000)
  }

  onRemove = () => {
    this.setState({
      actived: false
    })
  }

  render () {
    
    const message = ({
      title:'xpto',
      description:'foo'
    },{
      title:'xpto',
      description:'foo'
    })

    return (
     <div>
        <button onClick={this.onRemove}>Remover Component</button>
        {this.state.actived && (
          <Cloak message={message} loading={this.state.loading}/>
        )} 
      </div>
    )
  }
}

export default App;