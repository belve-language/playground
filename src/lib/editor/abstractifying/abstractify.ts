import type {SourceFileContentAbstractSyntaxTreeNode} from "../abstract-syntax-tree/node/kinds/source-file-content/SourceFileContentAbstractSyntaxTreeNode.ts";
import type {ConcreteSyntaxTree} from "../concrete-syntax-tree/ConreteSyntaxTree.ts";
import {whitespaceConcreteSyntaxTreeNodeTypeName} from "../concrete-syntax-tree/tree-node-types/whitespace/whitespaceConcreteSyntaxTreeNodeTypeName.ts";
import type {SupportedAbstractifyResult} from "./SupportedAbstractifyResult.ts";
import {abstractifySourceFileContent} from "./tree-node-kinds/source-file-content/abstractifySourceFileContent.ts";
export function abstractify(
	tree: ConcreteSyntaxTree,
): null | SupportedAbstractifyResult {
	if (
		tree === null
		|| tree.typeName === whitespaceConcreteSyntaxTreeNodeTypeName
	) {
		return null;
	}
	const abstractifiedSourceFileContent = abstractifySourceFileContent(tree);
	return abstractifiedSourceFileContent;
}
