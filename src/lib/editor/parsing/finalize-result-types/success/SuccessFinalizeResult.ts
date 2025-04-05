import type {ConcreteSyntaxTree} from "../../../concrete-syntax-tree/ConreteSyntaxTree.ts";
import type {FinalizeResult} from "../../FinalizeResult.ts";
export type SuccessFinalizeResult = FinalizeResult<
	"success",
	Readonly<{tree: ConcreteSyntaxTree}>
>;
