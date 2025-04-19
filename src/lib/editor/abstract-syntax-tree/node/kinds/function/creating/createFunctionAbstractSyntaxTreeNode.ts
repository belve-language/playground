import type {FunctionBodyAbstractSyntaxTreeNode} from "../../function-body/FunctionBodyAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import type {FunctionAbstractSyntaxTreeNode} from "../FunctionAbstractSyntaxTreeNode.ts";
import {functionAbstractSyntaxTreeNodeKindName} from "../kind-name/functionAbstractSyntaxTreeNodeKindName.ts";
export function createFunctionAbstractSyntaxTreeNode(
	children,
): FunctionAbstractSyntaxTreeNode {
	return createAbstractSyntaxTreeNode(functionAbstractSyntaxTreeNodeKindName, {
		header,
		body,
	});
}
