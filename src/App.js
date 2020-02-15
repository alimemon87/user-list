import React from 'react';
import Loader from './containers/Loader/Loader';
import Header from './components/Header/Header';
import MainSection from './containers/MainSection/MainSection';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading : false }), 3000)
  }
  render(){
  return (
    <div className="App">
      {
        this.state.loading ? 
          (<Loader loading={this.state.loading} />) : 
          (
          <div>
            <Header />
            <MainSection />
          </div>
          )
      }
    </div>
  );
  }
}

export default App;
