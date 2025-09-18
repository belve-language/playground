import * as typescriptParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import perfectionistPlugin from "eslint-plugin-perfectionist";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import svelteParser from "svelte-eslint-parser";
export default [
	{
		files: ["**/*.js", "**/*.svelte", "**/*.ts"],
		languageOptions: {
			parserOptions: {
				extraFileExtensions: ["svelte"],
				project: "./tsconfig.json",
			},
			sourceType: "module",
		},
	},
	{files: ["**/*.js", "**/*.ts"], languageOptions: {parser: typescriptParser}},
	{
		files: ["**/*.svelte"],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {parser: typescriptParser},
		},
	},
	{
		plugins: {
			import: importPlugin,
			perfectionist: perfectionistPlugin,
			unusedImports: unusedImportsPlugin,
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
			"perfectionist/sort-object-types": [
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
			"perfectionist/sort-objects": [
				"warn",
				{
					customGroups: [],
					destructuredObjects: true,
					groups: ["unknown"],
					ignoreCase: true,
					newlinesBetween: "never",
					objectDeclarations: true,
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
			"unusedImports/no-unused-imports": ["warn"],
		},
	},
	{ignores: [".git", ".svelte-kit", "build", "node_modules"]},
];
