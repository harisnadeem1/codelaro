import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
	{
		ignores: [
			'node_modules/**',
			'dist/**',
			'build/**',
			'.react-router/**',
			'src/components/ui/**',
			'src/hooks/use-toast.ts',
			'vite.config.ts',
			'react-router.config.ts',
		],
	},
	{
		files: ['**/*.{ts,tsx}'],
		extends: [tseslint.configs.recommended],
		plugins: {
			react,
			'react-hooks': reactHooks,
			import: importPlugin,
		},
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				ecmaFeatures: { jsx: true },
			},
			globals: {
				...globals.browser,
				React: 'readonly',
				Intl: 'readonly',
			},
		},
		settings: {
			react: {
				version: 'detect',
			},
			'import/extensions': ['.ts', '.tsx'],
			'import/resolver': {
				node: {
					extensions: ['.ts', '.tsx'],
				},
				alias: {
					map: [['@', './src']],
					extensions: ['.ts', '.tsx'],
				},
			},
		},
		rules: {
			...react.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,

			'react/prop-types': 'off',
			'react/no-unescaped-entities': 'off',
			'react/display-name': 'off',
			'react/jsx-uses-react': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/jsx-uses-vars': 'off',
			'react/jsx-no-comment-textnodes': 'off',

			'@typescript-eslint/no-unused-vars': 'off',
			'@typescript-eslint/no-explicit-any': 'off',

			'import/no-named-as-default': 'off',
			'import/no-named-as-default-member': 'off',
			'import/no-unresolved': 'off',
			'import/no-self-import': 'error',
			'import/no-cycle': [
				'error',
				{ ignoreExternal: true },
			],

			'no-undef': 'off',
		},
	},
	{
		files: ['tailwind.config.js'],
		languageOptions: {
			globals: globals.node,
		},
	},
);
