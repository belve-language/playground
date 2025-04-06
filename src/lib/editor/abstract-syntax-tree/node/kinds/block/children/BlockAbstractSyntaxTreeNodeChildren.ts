import type {FunctionCallAbstractSyntaxTreeNode} from "../../function-call/FunctionCallAbstractSyntaxTreeNode.ts";
import type {OperatedStatementAbstractSyntaxTreeNode} from "../../operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
import type {BlockAbstractSyntaxTreeNode} from "../BlockAbstractSyntaxTreeNode.ts";
export type BlockAbstractSyntaxTreeNodeChildren = Readonly<{
	firstStatement:
		| BlockAbstractSyntaxTreeNode
		| FunctionCallAbstractSyntaxTreeNode;
	restStatements: readonly OperatedStatementAbstractSyntaxTreeNode[];
}>;
