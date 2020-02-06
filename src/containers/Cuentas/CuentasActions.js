import { consultaClientesApi } from './CuentasApi';
import { CONSULTAR_CLIENTES } from './../../constants/Endpoints';
export const consultaClientes = async () => {
	const queryView = {
		endpoint: CONSULTAR_CLIENTES,
		method: 'GET',
	};
	return consultaClientesApi(queryView);
};
