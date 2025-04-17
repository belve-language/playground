import type {ConcreteSyntaxTree} from "../../../../../concrete-syntax-tree/ConreteSyntaxTree.ts";
import {createFinalizeResult} from "../../../creating/createFinalizeResult.ts";
import type {SuccessFinalizeResult} from "../SuccessFinalizeResult.ts";
import {successFinalizeResultTypeName} from "../type-name/errorFinalizeResultTypeName.ts";
export function createSuccessFinalizeResult(
	tree: ConcreteSyntaxTree,
): SuccessFinalizeResult {
	return createFinalizeResult(successFinalizeResultTypeName, {tree});
}
