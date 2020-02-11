import React, { Component } from 'react';
import { Layout, Table } from 'antd';
import { consultaClientes, consultaFacturas } from './CuentasActions';
const { Content } = Layout;
class Cuentas extends Component {
	state = {
		data: [],
		columns: [],
		loading: false,
	};
	expandedRowRender = record => {
		const { data } = this.state;
		const columns = [
			{ title: 'Factura', dataIndex: 'factura', key: 'factura' },
			{ title: 'Viaje', dataIndex: 'viaje', key: 'viaje' },
			{ title: 'Monto', dataIndex: 'monto', key: 'monto' },
			{ title: 'Fecha', dataIndex: 'fecha', key: 'fecha' },
		];
		const facturas = data.filter(element => element.cliente === record.cliente);
		return <Table columns={columns} dataSource={facturas[0].facturas} pagination={false} />;
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
					key: 'C' + index,
					cliente: item,
					numeroDeFacturasPorPagar: 0,
					montoTotalPorPagar: 0,
					semana1: '',
					semana2: '',
					facturas: [],
				});
				return item;
			});

			this.setState({
				data,
			});
		});
		consultaFacturas().then(response => {
			const Facturas = response.payload;
			Facturas.map((item, index) => {
				data.map(element => {
					if (element.cliente === item.cliente) {
						element.numeroDeFacturasPorPagar = element.numeroDeFacturasPorPagar + 1;
						element.montoTotalPorPagar =
							element.montoTotalPorPagar + parseInt(item.monto, 10);
						element.facturas.push({
							key: 'F' + index,
							cliente: item.cliente,
							viaje: item.viaje,
							monto: item.monto,
							factura: item.factura,
							fecha: item.fecFacturacion,
						});
					}
					return element;
				});
				return item;
			});
			this.setState({
				data,
			});
		});
		this.setState({
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
						expandedRowRender={this.expandedRowRender}
						bordered
						pagination={{ position: 'top' }}
					/>
				</Layout>
			</Content>
		);
	}
}
export default Cuentas;
