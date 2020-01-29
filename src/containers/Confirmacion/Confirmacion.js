import React, { Component } from 'react';
import { Layout, Table, Badge, List, DatePicker, Form } from 'antd';
import moment from 'moment';
const { Content } = Layout;
const NestedTable = () => {
	const expandedRowRender = () => {
		const columns = [
			{ title: 'Tramo', dataIndex: 'tramo', key: 'tramo' },
			{ title: 'Destino', dataIndex: 'destino', key: 'destino' },
			{ title: 'Distancia', dataIndex: 'distancia', key: 'distancia' },
			{ title: 'Fecha', dataIndex: 'fecha', key: 'fecha' },
			{ title: 'Tiempo', dataIndex: 'tiempo', key: 'tiempo' },
			{ title: 'Observaciones', dataIndex: 'observaciones', key: 'observaciones' },
			{
				title: 'Status',
				key: 'state',
				render: () => (
					<span>
						<Badge status="warning" />
						Pendiente
					</span>
				),
			},
		];

		const data = [];
		for (let i = 0; i < 3; ++i) {
			data.push({
				key: i,
				tramo: i + 1,
				destino: 'Guadalajara, Jalisco, México',
				distancia: '513 km',
				fecha: '2014-12-24 23:12:00',
				tiempo: '8 Horas 50 minutos',
				observaciones: 'Ruta 405 del día 16/01',
			});
		}
		return <Table columns={columns} dataSource={data} pagination={false} />;
	};
	const data2 = ['Monterrey', 'Guadalajara', 'Tamaulipas'];
	const columns = [
		{ title: 'Base', dataIndex: 'base', key: 'base' },
		{ title: 'Cliente', dataIndex: 'cliente', key: 'cliente' },
		{ title: 'Unidad', dataIndex: 'unidad', key: 'unidad' },
		{ title: 'Operador', dataIndex: 'operador', key: 'operador' },
		{
			title: 'Fechas',
			key: 'fechas',
			render: () => (
				<Form layout="inline">
					<Form.Item label="Carga">
						<DatePicker
							addonBefore="Entrega"
							size="default"
							showTime
							format="YYYY-MM-DD HH:mm"
							defaultValue={moment('2020-01-01 12:30', 'YYYY-MM-DD HH:mm')}
							placeholder="Start"
						/>
					</Form.Item>
					<Form.Item label="Entrega">
						<DatePicker
							size="default"
							showTime
							format="YYYY-MM-DD HH:mm"
							defaultValue={moment('2020-01-01 20:30', 'YYYY-MM-DD HH:mm')}
							placeholder="End"
						/>
					</Form.Item>
				</Form>
			),
		},
		{
			title: 'Destinos',
			key: 'destino',
			render: () => (
				<span>
					<List
						bordered
						size="small"
						dataSource={data2}
						renderItem={(item, index) => <List.Item>{item}</List.Item>}
					/>
				</span>
			),
		},
		{ title: 'Precio', dataIndex: 'precio', key: 'precio' },
		{
			title: 'Grupo',
			dataIndex: 'grupo',
			key: 'grupo',
		},
		{
			title: 'Gastos',
			children: [
				{
					title: 'Disel',
					dataIndex: 'disel',
					key: 'disel',
				},
				{
					title: 'Casetas',
					dataIndex: 'casetas',
					key: 'casetas',
				},
				{
					title: 'Alimentos',
					dataIndex: 'alimentos',
					key: 'alimentos',
				},
				{
					title: 'Transito',
					dataIndex: 'transito',
					key: 'transito',
				},
				{
					title: 'Maniobras',
					dataIndex: 'maniobras',
					key: 'maniobras',
				},
				{
					title: 'Comision',
					dataIndex: 'comision',
					key: 'comision',
				},
			],
		},
		{
			title: 'Status',
			key: 'state',
			render: () => (
				<span>
					<Badge status="warning" />
					Pendiente
				</span>
			),
		},
	];

	const data = [];
	for (let i = 0; i < 3; ++i) {
		data.push({
			key: i,
			base: 'Naucalpan',
			cliente: 'DILTEX',
			unidad: 'GF6000-1 Ejes: 2',
			operador: 'Abraham Sanchez Machuca',
			grupo: 'LOCAL C',
			disel: 2160,
			casetas: 2000,
			alimentos: 160,
			transito: 0,
			maniobras: 0,
			comision: 600,
			precio: 50000,
		});
	}
	return (
		<Table
			className="components-table-demo-nested"
			columns={columns}
			expandedRowRender={expandedRowRender}
			dataSource={data}
		/>
	);
};

class Confirmacion extends Component {
	render() {
		return (
			<Content>
				<Layout style={{ padding: '24px 24px', background: '#fff' }}>
					<NestedTable />
				</Layout>
			</Content>
		);
	}
}
export default Confirmacion;
