import type {ConcreteSyntaxTree} from "../../../../concrete-syntax-tree/ConreteSyntaxTree.ts";
import type {ParseResult} from "../../ParseResult.ts";
export type SuccessParseResult = ParseResult<
	"success",
	Readonly<{tree: ConcreteSyntaxTree}>
>;
