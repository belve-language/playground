import type {FunctionCallAbstractSyntaxTreeNode} from "../../function-call/FunctionCallAbstractSyntaxTreeNode.ts";
import type {OperatedStatementAbstractSyntaxTreeNode} from "../../operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
import type {BlockAbstractSyntaxTreeNode} from "../BlockAbstractSyntaxTreeNode.ts";
export function createBlockAbstractSyntaxTreeNode(
	children,
): BlockAbstractSyntaxTreeNode {
	return createAbstractSyntaxTreeNode(blockAbstractSyntaxTreeNodeKindName, {
		statements,
	} as const);
}
