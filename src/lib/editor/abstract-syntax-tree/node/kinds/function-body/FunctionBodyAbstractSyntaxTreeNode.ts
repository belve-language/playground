import type {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionBodyAbstractSyntaxTreeNodeChildren} from "./FunctionBodyAbstractSyntaxTreeNodeChildren.ts";
import type {functionBodyAbstractSyntaxTreeNodeKindName} from "./functionBodyAbstractSyntaxTreeNodeKindName.ts";
export type FunctionBodyAbstractSyntaxTreeNode = AbstractSyntaxTreeNode<
	typeof functionBodyAbstractSyntaxTreeNodeKindName,
	FunctionBodyAbstractSyntaxTreeNodeChildren
>;
