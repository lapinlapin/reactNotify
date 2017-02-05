import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainComponentContainer from './components/mainComponentContainer';

class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
                <div>
                    <MainComponentContainer />
                </div>
			</MuiThemeProvider>
        )
    }
}

export default App