import * as typescriptEslintParser from "@typescript-eslint/parser";
import importEslintPlugin from "eslint-plugin-import";
import perfectionistEslintPlugin from "eslint-plugin-perfectionist";
export default [
	{
		files: ["**/*.js", "**/*.mjs", "**/*.ts"],
		languageOptions: {sourceType: "module"},
	},
	{files: ["**/*.cjs"], languageOptions: {sourceType: "commonjs"}},
	{
		files: ["**/*.cjs", "**/*.js", "**/*.mjs", "**/*.ts"],
		languageOptions: {
			ecmaVersion: 13,
			parser: typescriptEslintParser,
			parserOptions: {
				extraFileExtensions: [],
				project: "./tsconfig.json",
				tsconfigRootDiar: ".",
			},
		},
	},
	{
		plugins: {
			import: importEslintPlugin,
			perfectionist: perfectionistEslintPlugin,
		},
		rules: {
			"import/order": [
				"warn",
				{
					alphabetize: {
						caseInsensitive: false,
						order: "asc",
						orderImportKind: "asc",
					},
					groups: [],
					"newlines-between": "never",
					pathGroups: [],
					pathGroupsExcludedImportTypes: [],
					sortTypesGroup: false,
					warnOnUnassignedImports: true,
				},
			],
			"perfectionist/sort-classes": [
				"warn",
				{
					customGroups: [],
					groups: [
						["static-method", "static-property"],
						["constructor"],
						["unknown"],
					],
					ignoreCase: true,
					newlinesBetween: "never",
					order: "asc",
					partitionByComment: false,
					specialCharacters: "keep",
					type: "natural",
				},
			],
			"perfectionist/sort-interfaces": [
				"warn",
				{
					customGroups: [],
					groups: ["unknown"],
					ignoreCase: true,
					newlinesBetween: "never",
					order: "asc",
					partitionByComment: false,
					partitionByNewLine: false,
					specialCharacters: "keep",
					type: "natural",
				},
			],
			"perfectionist/sort-union-types": [
				"warn",
				{
					customGroups: [],
					groups: ["unknown"],
					ignoreCase: true,
					newlinesBetween: "never",
					order: "asc",
					partitionByComment: false,
					partitionByNewLine: false,
					specialCharacters: "keep",
					type: "natural",
				},
			],
			"sort-keys": [
				"warn",
				"asc",
				{
					allowLineSeparatedGroups: false,
					caseSensitive: false,
					ignoreComputedKeys: false,
					minKeys: 2,
					natural: false,
				},
			],
		},
	},
	{ignores: [".git", ".svelte-kit", "node_modules"]},
];
