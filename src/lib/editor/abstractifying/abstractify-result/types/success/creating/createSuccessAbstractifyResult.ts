import type {AbstractSyntaxTree} from "../../../../../abstract-syntax-tree/AbstractSyntaxTree.ts";
import {createAbstractifyResult} from "../../../creating/createAbstractifyResult.ts";
import type {SuccessAbstractifyResult} from "../SuccessAbstractifyResult.ts";
import {successAbstractifyResultTypeName} from "../type-name/successAbstractifyResultTypeName.ts";
export function createSuccessAbstractifyResult(
	tree: AbstractSyntaxTree | null,
): SuccessAbstractifyResult {
	return createSuccessAbstractifyResult({tree});
}
