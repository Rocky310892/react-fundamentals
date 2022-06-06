import React, { Component } from 'react'

export default class State extends Component {

    state ={
        check: false,
        toggle: false,
        color: false
    }

    onClickChange = () => {
        this.setState({
            check:true
        })
    }
    onClickToggle = () => {
        this.setState({
            toggle:!this.state.toggle
        })
    }
    onClickColor = () => {
        this.setState({
            color: !this.state.color
        })
    }

  render() {
    return (
           <>
                <button onClick={this.onClickChange}>
                    {
                        this.state.check ? 'i am true' : 'I am false'
                    }
                </button>
                <hr/>
                <button onClick={this.onClickToggle}>
                    {
                        this.state.toggle ? 'i am true' : 'I am false'
                    }
                </button>
                <hr/>
                <button onClick={this.onClickColor}>
                    Add Active Class
                </button>
                <p className={ this.state.color ? 'active': ''}>Hello Word</p>
           </>
        )
  }
}
