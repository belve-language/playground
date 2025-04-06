import type {ConcreteSyntaxTree} from "../../../concrete-syntax-tree/ConreteSyntaxTree.ts";
export type SuccessParseResult = ParserResult<
	"success",
	Readonly<{tree: ConcreteSyntaxTree}>
>;
