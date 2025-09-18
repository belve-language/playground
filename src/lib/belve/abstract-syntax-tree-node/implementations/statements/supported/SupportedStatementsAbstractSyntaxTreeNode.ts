import type {FinalStatementsAbstractSyntaxTreeNode} from "../implementations/final/FinalStatementsAbstractSyntaxTreeNode.ts";
import type {IntermediateStatementsAbstractSyntaxTreeNode} from "../implementations/intermediate/IntermediateStatementsAbstractSyntaxTreeNode.ts";
export type SupportedStatementsAbstractSyntaxTreeNode =
	| FinalStatementsAbstractSyntaxTreeNode
	| IntermediateStatementsAbstractSyntaxTreeNode;
