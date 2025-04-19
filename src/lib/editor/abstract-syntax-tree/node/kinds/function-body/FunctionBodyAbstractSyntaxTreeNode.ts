import type {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionBodyAbstractSyntaxTreeNodeDataChildren} from "./FunctionBodyAbstractSyntaxTreeNodeDataChildren.ts";
import type {functionBodyAbstractSyntaxTreeNodeKindName} from "./functionBodyAbstractSyntaxTreeNodeKindName.ts";
export type FunctionBodyAbstractSyntaxTreeNode = AbstractSyntaxTreeNode<
	typeof functionBodyAbstractSyntaxTreeNodeKindName,
	FunctionBodyAbstractSyntaxTreeNodeDataChildren
>;
