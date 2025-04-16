import type {BlockAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/block/BlockAbstractSyntaxTreeNode.ts";
import type {FunctionCallAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call/FunctionCallAbstractSyntaxTreeNode.ts";
import type {OperatedStatementAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
import type {BlockContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/block-content/BlockContentConcreteSyntaxTreeNode.ts";
import {abstractifyStatements} from "../statements/abstractifyStatements.ts";
export function abstractifyBlockContent(
	blockContent: BlockContentConcreteSyntaxTreeNode,
): readonly [
	BlockAbstractSyntaxTreeNode | FunctionCallAbstractSyntaxTreeNode,
	...OperatedStatementAbstractSyntaxTreeNode[],
] {
	const [, blockContentStatements] = blockContent.data.children;
	const abstractifiedBlockContentStatements: readonly [
		BlockAbstractSyntaxTreeNode | FunctionCallAbstractSyntaxTreeNode,
		...OperatedStatementAbstractSyntaxTreeNode[],
	] = abstractifyStatements(blockContentStatements);
	return abstractifiedBlockContentStatements;
}
