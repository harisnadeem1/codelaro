import { createRequestHandler } from 'react-router';
import { RouterContextProvider } from 'react-router';

const requestHandler = createRequestHandler(
	() => import('virtual:react-router/server-build'),
	import.meta.env.MODE,
);

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext,
	): Promise<Response> {
		const context = new RouterContextProvider();

		return requestHandler(request, context);
	},
} satisfies ExportedHandler<Env>;