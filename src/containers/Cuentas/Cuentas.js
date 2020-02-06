import React, { Component, Fragment } from 'react';
import { Layout, Table } from 'antd';
import { consultaClientes } from './CuentasActions';
const { Content } = Layout;
class Cuentas extends Component {
	state = {
		data: [],
		columns: [],
		loading: false,
	};

	componentDidMount = () => {
		const { data } = this.state;
		this.setState({
			loading: true,
		});
		let columns = [
			{
				title: 'CLIENTE',
				dataIndex: 'cliente',
				key: 'cliente',
			},
			{
				title: '# DE FACTURAS POR PAGAR',
				dataIndex: 'numeroDeFacturasPorPagar',
				key: 'numeroDeFacturasPorPagar',
			},
			{
				title: 'MONTO TOTAL POR PAGAR',
				dataIndex: 'montoTotalPorPagar',
				key: 'montoTotalPorPagar',
			},
			{ title: 'SEMANA 1', dataIndex: 'semana1', key: 'semana1' },
			{ title: 'SEMANA 2', dataIndex: 'semana2', key: 'semana2' },
		];

		consultaClientes().then(response => {
			const clientes = response.payload;
			clientes.map((item, index) => {
				data.push({
					key: index,
					cliente: item,
					numeroDeFacturasPorPagar: '',
					montoTotalPorPagar: '',
					semana1: '',
					semana2: '',
				});
			});
			this.setState({
				data,
			});
		});
		this.setState({
			data,
			columns,
			loading: false,
		});
	};

	render() {
		const { data, columns, loading } = this.state;
		return (
			<Content>
				<Layout style={{ padding: '24px 24px', background: '#fff' }}>
					<Table
						className="components-table-demo-nested"
						columns={columns}
						dataSource={data}
						loading={loading}
						bordered
						pagination={{ position: 'top' }}
					/>
				</Layout>
			</Content>
		);
	}
}
export default Cuentas;
