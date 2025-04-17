import type {ConcreteSyntaxTree} from "../../../../../concrete-syntax-tree/ConreteSyntaxTree.ts";
import {createParseResult} from "../../../creating/createParseResult.ts";
import type {SuccessParseResult} from "../SuccessParseResult.ts";
import {successParseResultTypeName} from "../type-name/successParseResultTypeName.ts";
export function createSuccessParseResult(
	tree: ConcreteSyntaxTree,
): SuccessParseResult {
	return createParseResult(successParseResultTypeName, {tree});
}
