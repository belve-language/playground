import type {SubabstractSyntaxTree} from "../../../../../abstract-syntax-tree/SubabstractSyntaxTree.ts";
import type {SuccessSubabstractifyResult} from "../SuccessSubabstractifyResult.ts";
export function createSuccessSubabstractifyResult(
	tree: SubabstractSyntaxTree | null,
): SuccessSubabstractifyResult {
	return createSuccessSubabstractifyResult({tree});
}
