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
			{ title: 'Monto Factura', dataIndex: 'monto', key: 'monto' },
			{ title: 'Monto por Pagar', dataIndex: 'montoPorPagar', key: 'montoPorPagar' },
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
	llenarFacturas = response => {
		console.log(response);
		const { data } = this.state;
		const Facturas = response.payload;
		Facturas.map((item, index) => {
			data.map(element => {
				if (element.cliente === item.cliente) {
					var monthNames = [
						'01',
						'02',
						'03',
						'04',
						'05',
						'06',
						'07',
						'08',
						'09',
						'10',
						'11',
						'12',
					];
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
						parseInt(item.montoPagado, 10) -
						parseInt(item.monto, 10);
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
							monthNames[fecha.getMonth()] +
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
				title: 'MONTO TOTAL DE FACTURAS',
				dataIndex: 'montoTotalDeFacturas',
				key: 'montoTotalDeFacturas',
			},
			{
				title: 'MONTO TOTAL POR PAGAR',
				dataIndex: 'montoTotalPorPagar',
				key: 'montoTotalPorPagar',
			},
			{ title: 'SEMANA 1', dataIndex: 'semana1', key: 'semana1' },
			{ title: 'SEMANA 2', dataIndex: 'semana2', key: 'semana2' },
			{ title: 'DIAS DE CREDITO', dataIndex: 'diasCredito', key: 'diasCredito' },
		];

		consultaClientes().then(response => {
			const clientes = response.payload;
			const semana = Date(Date.now());
			clientes.map((item, index) => {
				data.push({
					key: 'C' + index,
					cliente: item.nombre,
					numeroDeFacturasPorPagar: 0,
					montoTotalDeFacturas: 0,
					montoTotalPorPagar: 0,
					semana1: semana.toString(),
					semana2: semana.toString(),
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
