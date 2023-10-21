module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'prettier',
		'plugin:tailwindcss/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	],
	rules: {
		'sort-imports': [
			'warn',
			{
				ignoreCase: false,
				ignoreDeclarationSort: true,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
				allowSeparatedGroups: false
			}
		],
		'import/no-duplicates': 'off',
		'import/no-unresolved': 'off', // Svelte-Kit still has bug with some alias
		'import/order': [
			'warn',
			{
				groups: ['builtin', 'external', 'internal', ['sibling', 'parent'], 'index', 'unknown'],
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true
				}
			}
		]
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
			'svelte-eslint-parser': ['*.svelte']
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true
			}
		}
	}
};
