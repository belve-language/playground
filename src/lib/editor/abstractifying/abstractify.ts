import type {ConcreteSyntaxTree} from "../concrete-syntax-tree/ConreteSyntaxTree.ts";
import {whitespaceConcreteSyntaxTreeNodeKindName} from "../concrete-syntax-tree/node/kinds/whitespace/kind-name/whitespaceConcreteSyntaxTreeNodeKindName.ts";
import type {SupportedAbstractifyResult} from "./abstractify-result/supported/SupportedAbstractifyResult.ts";
import {createErrorAbstractifyResult} from "./abstractify-result/types/error/creating/createErrorAbstractifyResult.ts";
import {createSuccessAbstractifyResult} from "./abstractify-result/types/success/creating/createSuccessAbstractifyResult.ts";
import {abstractifySourceFileContent} from "./subabstrifiers/source-file-content/abstractifySourceFileContent.ts";
export function abstractify(
	tree: ConcreteSyntaxTree,
): SupportedAbstractifyResult | null {
	if (tree.kindName === whitespaceConcreteSyntaxTreeNodeKindName) {
		return null;
	}
	const abstractifySourceFileContentResult = abstractifySourceFileContent(tree);
	switch (abstractifySourceFileContentResult.typeName) {
		case "error": {
			return createErrorAbstractifyResult(
				abstractifySourceFileContentResult.data.message,
			);
		}
		case "success": {
			return createSuccessAbstractifyResult();
		}
	}
}
