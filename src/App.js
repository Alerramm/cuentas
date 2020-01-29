import React, { Component, Fragment } from 'react';
import { Layout } from 'antd';
import PageHeaders from './components/PageHeader/PageHeader';
import Confirmacion from './containers/Confirmacion/Confirmacion';
import './App.css';
import 'antd/dist/antd.css';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Layout>
					<PageHeaders />
					<Confirmacion />
				</Layout>
			</Fragment>
		);
	}
}

export default App;
