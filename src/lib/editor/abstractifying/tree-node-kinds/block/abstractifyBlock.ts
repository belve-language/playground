import type {BlockAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/block/BlockAbstractSyntaxTreeNode.ts";
import {createBlockAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/block/creating/createBlockAbstractSyntaxTreeNode.ts";
import type {FunctionCallAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call/FunctionCallAbstractSyntaxTreeNode.ts";
import type {OperatedStatementAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
import type {BlockConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/block/BlockConcreteSyntaxTreeNode.ts";
import {whitespaceConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/tree-node-types/whitespace/whitespaceConcreteSyntaxTreeNodeKindName.ts";
import {abstractifyBlockContent} from "../block-content/abstractifyBlockContent.ts";
export function abstractifyBlock(
	block: BlockConcreteSyntaxTreeNode,
): BlockAbstractSyntaxTreeNode {
	const [, blockContent] = block.data.children;
	if (
		blockContent === null
		|| blockContent.typeName === whitespaceConcreteSyntaxTreeNodeKindName
	) {
		// TODO : no throw
		throw new Error("Not implemented.");
	}
	const abstractifiedBlockContent: readonly [
		BlockAbstractSyntaxTreeNode | FunctionCallAbstractSyntaxTreeNode,
		...OperatedStatementAbstractSyntaxTreeNode[],
	] = abstractifyBlockContent(blockContent);
	const abstractifiedBlock: BlockAbstractSyntaxTreeNode =
		createBlockAbstractSyntaxTreeNode(abstractifiedBlockContent);
	return abstractifiedBlock;
}
