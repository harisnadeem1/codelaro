const LOCAL_HOSTNAMES = new Set(['localhost', '127.0.0.1', '0.0.0.0', '[::1]']);

/** Public origin for canonical links, social metadata, and the sitemap.
 * Public deployments use HTTPS; local development uses HTTP.
 */
export const siteOrigin = (request: Request): string => {
	const { host, hostname } = new URL(request.url);

	return `${LOCAL_HOSTNAMES.has(hostname) ? 'http' : 'https'}://${host}`;
};
