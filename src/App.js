import React, {Component}from 'react';
import './App.css';
import Jobs from'./components/jobs'

class App extends Component {
  state = {
    jobs: [
      {
        id: 1,
        title: 'Test job 1',
        description: 'My Description',
      },
      {
        id: 2,
        title: 'Test job 2',
        description: 'My Description 2',
      },
      {
        id: 3,
        title: 'Test job 3',
        description: 'My Description 3',
      },
      {
        id: 4,
        title: 'Test job 4',
        description: 'My Description 4',
      }
    ]
  }
    render() {
      return (
        <div className="App">
          <h1>Test</h1>
        <Jobs jobs={this.state.jobs}/>
      </div>
      )
    }
}

export default App;
