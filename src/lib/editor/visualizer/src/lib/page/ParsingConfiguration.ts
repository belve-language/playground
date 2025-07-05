export type ParsingConfiguration = Readonly<{
	sourceCode: string;
	mode:
		| "none"
		| "animated-concrete-syntax-tree"
		| "instant-concrete-syntax-tree"
		| "abstract-syntax-tree";
}>;
