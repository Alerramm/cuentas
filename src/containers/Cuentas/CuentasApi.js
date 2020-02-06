export const consultaClientesApi = async queryView => {
	const method = queryView.method;
	const instance = await fetch(queryView.endpoint, {
		method,
	});
	const response = await instance.json();
	return response;
};
