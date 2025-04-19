import type {ConcreteSyntaxTree} from "../concrete-syntax-tree/ConreteSyntaxTree.ts";
import {whitespaceConcreteSyntaxTreeNodeKindName} from "../concrete-syntax-tree/node/kinds/whitespace/kind-name/whitespaceConcreteSyntaxTreeNodeKindName.ts";
import type {SupportedAbstractifyResult} from "./SupportedAbstractifyResult.ts";
import {abstractifySourceFileContent} from "./tree-node-kinds/source-file-content/abstractifySourceFileContent.ts";
export function abstractify(
	tree: ConcreteSyntaxTree,
): null | SupportedAbstractifyResult {
	if (
		tree === null
		|| tree.typeName === whitespaceConcreteSyntaxTreeNodeKindName
	) {
		return null;
	}
	return abstractifySourceFileContent(tree);
}
