import { cuentasApi } from './CuentasApi';
import { CONSULTAR_CLIENTES, CONSULTAR_FACTURAS } from './../../constants/Endpoints';
export const consultaClientes = async () => {
	const queryView = {
		endpoint: CONSULTAR_CLIENTES,
		method: 'GET',
	};
	return cuentasApi(queryView);
};

export const consultaFacturas = async () => {
	const queryView = {
		endpoint: CONSULTAR_FACTURAS,
		method: 'GET',
	};
	return cuentasApi(queryView);
};
