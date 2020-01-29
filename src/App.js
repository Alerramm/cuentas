import React, { Component, Fragment } from 'react';
import { Layout } from 'antd';
import PageHeaders from './components/PageHeader/PageHeader';
import Cuentas from './containers/Cuentas/Cuentas';
import './App.css';
import 'antd/dist/antd.css';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Layout>
					<PageHeaders />
					<Cuentas />
				</Layout>
			</Fragment>
		);
	}
}

export default App;
