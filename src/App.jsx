import './App.css'
import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



export default class App extends Component {
  pageSize = 5;
  country = "us";
  apiKey = import.meta.env.VITE_REACT_APP_NEWS_API;

  constructor() {
    super();
    this.state = {
      darkMode: false // Initially set to light mode
    };
  }

  toggleDarkMode = () => {
    this.setState(prevState => ({
      darkMode: !prevState.darkMode
    }));
  };


  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  };

  render() {

    const { darkMode } = this.state;


    return (
      <>

        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
          
          <Router>

            <Navbar toggleDarkMode={this.toggleDarkMode} darkMode={darkMode} />

            <LoadingBar
              color='#5B33FE'
              progress={this.state.progress}
            />


            
            <Routes>
              
              <Route exact path="/" element={< News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country={this.country} category='general' />} />
              
              <Route exact path="/business" element={< News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country={this.country} category='business' />} />
              
              <Route exact path="/entertainment" element={< News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country={this.country} category='entertainment' />} />
              
              <Route exact path="/health" element={< News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country={this.country} category='health' />} />
              
              <Route exact path="/science" element={< News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country={this.country} category='science' />} />
              
              <Route exact path="/sports" element={< News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country={this.country} category='sports' />} />
              
              <Route exact path="/technology" element={< News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country={this.country} category='technology' />} />

            </Routes>

          </Router>

        </div>
      </>
    )
  }
}
