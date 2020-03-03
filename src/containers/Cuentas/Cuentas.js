import React, { Component, Fragment } from 'react';
import { Layout, Table, InputNumber, Menu, Dropdown, Badge, Modal } from 'antd';
import { consultaClientes, consultaFacturas, actualizaEstatus } from './CuentasActions';
const { Content } = Layout;
class Cuentas extends Component {
	state = {
		data: [],
		columns: [],
		loading: false,
		id: 0,
		parcial: false,
		monto: 0,
		tipo: '',
		btnAplicar: true,
	};
	handleMenuClick = e => {
		if (e.key.substring(0, 3) === 'pag') {
			this.setState(
				{
					id: e.key.substring(4, e.key.indexOf('-', e.key.indexOf('-') + 1)),
					monto: e.key.substring(
						1 + e.key.indexOf('-', e.key.indexOf('-', e.key.indexOf('-') + 1)),
						e.key.length
					),
					tipo: 'Pagada',
				},
				() => {
					this.changeStatus();
				}
			);
		} else {
			this.setState({
				id: e.key.substring(4, e.key.indexOf('-', e.key.indexOf('-') + 1)),
				parcial: true,
				tipo: 'Parcial',
			});
		}
	};
	changeStatus = () => {
		this.setState({
			data: [],
		});
		const { id, monto, tipo } = this.state;

		consultaClientes().then(response => {
			const { data } = this.state;
			const clientes = response.payload;
			clientes.map((item, index) => {
				data.push({
					key: 'C' + index,
					cliente: item.nombre,
					numeroDeFacturasPorPagar: 0,
					montoTotalDeFacturas: 0,
					montoTotalPorPagar: 0,
					semana1: '',
					semana2: '',
					diasCredito: item.diasCredito,
					facturas: [],
				});
				return item;
			});

			this.setState({
				data,
			});
		});
		actualizaEstatus({ id, monto, tipoPago: tipo }).then(response => {
			this.llenarFacturas(response.payload);
		});

		this.setState({
			parcial: false,
			id: 0,
			monto: 0,
			tipo: '',
		});
	};
	menu = (id, monto, montoPagado) => {
		let estado = false,
			parcial = false;
		if (montoPagado === monto) {
			estado = true;
		}
		if (montoPagado !== 0) {
			parcial = true;
		}
		return (
			<Menu onClick={this.handleMenuClick}>
				<Menu.Item disabled={estado || parcial} key={`par-${id}-${monto}`}>
					Parcial
				</Menu.Item>
				<Menu.Item disabled={estado} key={`pag-${id}-${monto}`}>
					Pagada
				</Menu.Item>
			</Menu>
		);
	};
	expandedRowRender = record => {
		const { data } = this.state;
		const columns = [
			{ title: 'Factura', dataIndex: 'factura', key: 'factura' },
			{ title: 'Viaje', dataIndex: 'viaje', key: 'viaje' },
			{
				title: 'Monto Factura',
				dataIndex: 'monto',
				key: 'monto',
				render: text => (
					<InputNumber
						value={text}
						disabled
						formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
					/>
				),
			},
			{
				title: 'Monto por Pagar',
				dataIndex: 'montoPorPagar',
				key: 'montoPorPagar',
				render: text => (
					<InputNumber
						value={text}
						disabled
						formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
					/>
				),
			},
			{ title: 'Fecha', dataIndex: 'fecha', key: 'fecha' },
			{ title: 'Fecha Vencimiemto', dataIndex: 'fechaVencimiento', key: 'fechaVencimiento' },
			{ title: 'Estatus', dataIndex: 'estatus', key: 'estatus' },
		];
		const facturas = data.filter(element => element.cliente === record.cliente);
		return <Table columns={columns} dataSource={facturas[0].facturas} pagination={false} />;
	};
	estatus = (montoPagar, monto, id) => {
		let frase = 'Parcial',
			badge = 'warning';
		if (montoPagar >= monto) {
			frase = 'Pagada';
			badge = 'success';
		}
		if (montoPagar === 0) {
			frase = 'Pendiente';
			badge = 'error';
		}
		return (
			<Dropdown overlay={this.menu(id, monto, montoPagar)}>
				<div>
					{frase} <Badge status={badge} />
				</div>
			</Dropdown>
		);
	};
	monthNames = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
	llenarFacturas = response => {
		console.log(response);
		const { data } = this.state;
		const Facturas = response.payload;
		Facturas.map((item, index) => {
			data.map(element => {
				if (element.cliente === item.cliente) {
					const fecha = new Date();
					fecha.setFullYear(
						item.fecFacturacion.substring(0, 4),
						parseInt(item.fecFacturacion.substring(5, 7), 10) - 1,
						parseInt(item.fecFacturacion.substring(8, 10), 10) +
							parseInt(element.diasCredito, 10)
					);
					element.montoTotalDeFacturas =
						element.montoTotalDeFacturas + parseInt(item.monto, 10);
					element.montoTotalPorPagar =
						element.montoTotalPorPagar +
						parseInt(item.monto, 10) -
						parseInt(item.montoPagado, 10);

					element.numeroDeFacturasPorPagar = element.numeroDeFacturasPorPagar + 1;

					element.facturas.push({
						key: 'F' + index,
						cliente: item.cliente,
						viaje: item.viaje,
						monto: item.monto,
						montoPorPagar: item.monto - item.montoPagado,
						factura: item.factura,
						fecha:
							item.fecFacturacion.substring(8, 10) +
							'-' +
							item.fecFacturacion.substring(5, 7) +
							'-' +
							item.fecFacturacion.substring(0, 4),
						fechaVencimiento:
							fecha.getDate() +
							'-' +
							this.monthNames[fecha.getMonth()] +
							'-' +
							fecha.getFullYear(),
						estatus: this.estatus(
							parseInt(item.montoPagado, 10),
							parseInt(item.monto, 10),
							item.id
						),
					});
				}
				return element;
			});
			return item;
		});
		this.setState({
			data,
		});
	};
	componentDidMount = () => {
		const { data } = this.state;
		this.setState({
			loading: true,
		});
		const semana1 = new Date(Date.now());
		const day = semana1.getDay();
		let suma;
		switch (day) {
			case 0:
				suma = 5;
				semana1.setDate(semana1.getDate() - 7);
				break;
			case 1:
				suma = 4;
				semana1.setDate(semana1.getDate() - 7);
				break;
			case 2:
				suma = 3;
				semana1.setDate(semana1.getDate() - 7);
				break;
			case 3:
				suma = 2;
				semana1.setDate(semana1.getDate() - 7);
				break;
			case 4:
				suma = 1;
				semana1.setDate(semana1.getDate() - 7);
				break;
			case 5:
				suma = 0;
				break;
			case 6:
				suma = -1;
				break;
			default:
				suma = 0;
		}
		semana1.setDate(semana1.getDate() + suma);
		const semana2 = new Date(semana1);
		semana2.setDate(semana2.getDate() + 6);
		const semana3 = new Date(semana2);
		semana3.setDate(semana3.getDate() + 1);
		const semana4 = new Date(semana3);
		semana4.setDate(semana4.getDate() + 6);
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
				title: 'TOTAL DE FACTURAS',
				dataIndex: 'montoTotalDeFacturas',
				key: 'montoTotalDeFacturas',
				render: text => (
					<InputNumber
						value={text}
						disabled
						formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
					/>
				),
			},
			{
				title: 'TOTAL POR PAGAR',
				dataIndex: 'montoTotalPorPagar',
				key: 'montoTotalPorPagar',
				render: text => (
					<InputNumber
						value={text}
						disabled
						formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
					/>
				),
			},
			{
				title:
					'SEMANA ' +
					semana1.getDate() +
					'-' +
					this.monthNames[semana1.getMonth()] +
					'-' +
					semana1.getFullYear() +
					' / ' +
					semana2.getDate() +
					'-' +
					this.monthNames[semana2.getMonth()] +
					'-' +
					semana2.getFullYear(),
				dataIndex: 'semana1',
				key: 'semana1',
			},
			{
				title:
					'SEMANA ' +
					semana3.getDate() +
					'-' +
					this.monthNames[semana3.getMonth()] +
					'-' +
					semana3.getFullYear() +
					' / ' +
					semana4.getDate() +
					'-' +
					this.monthNames[semana4.getMonth()] +
					'-' +
					semana4.getFullYear(),
				dataIndex: 'semana2',
				key: 'semana2',
			},
			{ title: 'DIAS DE CREDITO', dataIndex: 'diasCredito', key: 'diasCredito' },
		];

		consultaClientes().then(response => {
			const clientes = response.payload;

			clientes.map((item, index) => {
				data.push({
					key: 'C' + index,
					cliente: item.nombre,
					numeroDeFacturasPorPagar: 0,
					montoTotalDeFacturas: 0,
					montoTotalPorPagar: 0,
					semana1: '',
					semana2: '',
					diasCredito: item.diasCredito,
					facturas: [],
				});
				return item;
			});

			this.setState({
				data,
			});
		});
		consultaFacturas().then(response => {
			this.llenarFacturas(response);
		});
		this.setState({
			columns,
			loading: false,
		});
	};
	handleChange = value => {
		this.setState(
			{
				monto: value,
			},
			() => {
				const { monto } = this.state;
				this.setState({
					btnAplicar: monto === 0,
				});
			}
		);
	};
	handleCancel = () => {
		this.setState({
			parcial: false,
			id: 0,
			monto: 0,
			btnAplicar: true,
		});
	};
	render() {
		const { data, columns, loading, parcial, monto, btnAplicar } = this.state;
		return (
			<Fragment>
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
				{parcial && (
					<Modal
						title="Importe"
						visible={parcial}
						onOk={this.changeStatus}
						onCancel={this.handleCancel}
						closable={false}
						maskClosable={false}
						okButtonProps={{
							disabled: btnAplicar,
						}}
					>
						<InputNumber autoFocus value={monto} min={0} onChange={this.handleChange} />
					</Modal>
				)}
			</Fragment>
		);
	}
}
export default Cuentas;
