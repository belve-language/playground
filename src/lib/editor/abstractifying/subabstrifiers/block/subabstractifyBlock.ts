import type {BlockAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/block/BlockAbstractSyntaxTreeNode.ts";
import {createBlockAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/block/creating/createBlockAbstractSyntaxTreeNode.ts";
import type {FunctionCallAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call/FunctionCallAbstractSyntaxTreeNode.ts";
import type {OperatedStatementAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
import type {BlockConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/block/BlockConcreteSyntaxTreeNode.ts";
import {whitespaceConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/whitespace/kind-name/whitespaceConcreteSyntaxTreeNodeKindName.ts";
import {subabstractifyBlockContent} from "../block-content/subabstractifyBlockContent.ts";
export function subsubabstractifyBlock(
	block: BlockConcreteSyntaxTreeNode,
): BlockAbstractSyntaxTreeNode {
	const [, blockContent] = block.data.children;
	if (
		blockContent === null
		|| blockContent.kindName === whitespaceConcreteSyntaxTreeNodeKindName
	) {
		// TODO : no throw
		throw new Error("Not implemented.");
	}
	const abstractifiedBlockContent: readonly [
		BlockAbstractSyntaxTreeNode | FunctionCallAbstractSyntaxTreeNode,
		...OperatedStatementAbstractSyntaxTreeNode[],
	] = subabstractifyBlockContent(blockContent);
	const abstractifiedBlock: BlockAbstractSyntaxTreeNode =
		createBlockAbstractSyntaxTreeNode(abstractifiedBlockContent);
	return abstractifiedBlock;
}
