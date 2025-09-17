import type {OrOperatorAbstractSyntaxTreeNode} from "../implementations/or/OrOperatorAbstractSyntaxTreeNode.ts";
import type {ThenOperatorAbstractSyntaxTreeNode} from "../implementations/then/ThenOperatorAbstractSyntaxTreeNode.ts";
export type SupportedOperatorAbstractSyntaxTreeNode =
	| OrOperatorAbstractSyntaxTreeNode
	| ThenOperatorAbstractSyntaxTreeNode;
