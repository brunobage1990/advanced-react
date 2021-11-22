import React, { Component } from 'react';

class Cloak extends Component {

    state = {
        func:'title'
    }

    conponentDidMount() {
        const { message,loading } = this.props
      console.log('componentDidMount',message)
      console.log('componentDidMount:loading',loading)
    }

    conponentDidUpdate(prevProps) {
        const { loading } = this.props
        if (this.props.loading !== prevProps.loading) {
            console.log('componentDidUpdate:loading',loading)
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount: fui removido:{')
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.func !== nextState.func || nextProps.loading !== this.props.loading
    }

    func = () => {
        this.setState({
            func:true
        })
    }
  
    render() {
        const { message } = this.props
        console.log('render',message)
      return (
        <div>
          Mensagem Nova!          
        </div>
      )
    }
  }

  export default Cloak;