import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

const rootEl = document.getElementById('root')
const actionCreators = {
  onIncrement() {
    return { type: 'INCREMENT'}
  },
  onDecrement() {
    return { type: 'DECREMENT'}
  },
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: counter(undefined, {})
    };
    this.dispatch = this.dispatch.bind(this);
    this.actions = bindActionCreators(actionCreators, this.dispatch);
  }

  dispatch(action) {
    this.setState(prevState => ({
      value: counter(prevState.value, action)
    }));
  }

  render() {
    return (
      <Counter {...this.state} {...this.actions} />
    );
  }
}

ReactDOM.render(<App />, rootEl)