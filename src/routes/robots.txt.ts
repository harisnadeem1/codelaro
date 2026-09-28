import type { Route } from './+types/robots.txt';
import { siteOrigin } from '@/lib/site-origin.server';

const AI_ANSWER_AGENTS = [
	'OAI-SearchBot',
	'ChatGPT-User',
	'Claude-SearchBot',
	'Claude-User',
	'PerplexityBot',
	'Perplexity-User',
	'DuckAssistBot',
	'MistralAI-User',
	'meta-webindexer',
	'meta-externalfetcher',
	'Amzn-SearchBot',
	'Amzn-User',
];

const AI_TRAINING_AGENTS = [
	'GPTBot',
	'ClaudeBot',
	'Google-Extended',
	'Applebot-Extended',
	'meta-externalagent',
	'Amazonbot',
	'Bytespider',
];

const CONTENT_SIGNAL =
	'Content-Signal: search=yes, ai-input=yes, ai-train=no';

const BLOCKED_PATHS = [
	'/api/',
];

function createAgentRules(
	agents: string[],
	allow: boolean,
): string[] {
	return agents.flatMap((agent) => [
		`User-agent: ${agent}`,
		...(allow
			? [
					CONTENT_SIGNAL,
					'Allow: /',
					...BLOCKED_PATHS.map(
						(path) => `Disallow: ${path}`,
					),
				]
			: ['Disallow: /']),
		'',
	]);
}

function generateRobots(origin: string): string {
	const normalizedOrigin = origin.replace(/\/+$/, '');

	const rules = [
		'User-agent: *',
		CONTENT_SIGNAL,
		'Allow: /',
		...BLOCKED_PATHS.map(
			(path) => `Disallow: ${path}`,
		),
		'',
		...createAgentRules(AI_ANSWER_AGENTS, true),
		...createAgentRules(AI_TRAINING_AGENTS, false),
		`Sitemap: ${normalizedOrigin}/sitemap.xml`,
	];

	return `${rules.join('\n')}\n`;
}

export function loader({ request }: Route.LoaderArgs) {
	const origin = siteOrigin(request);

	return new Response(generateRobots(origin), {
		status: 200,
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control':
				'public, max-age=3600, s-maxage=3600',
		},
	});
}