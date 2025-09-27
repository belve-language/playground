import type {AbstractSyntaxTreeNode} from "../../../../../../../../../../../../belve/abstract-syntax-tree-node/AbstractSyntaxTreeNode.ts";
import type {Variables} from "../../../../../../../../../../../../belve/variables/Variables.ts";
import {Highlight} from "../../Highlight.ts";
import {failureHighlightTypeName} from "./type-name/failureHighlightTypeName.ts";
export class FailureHighlight extends Highlight<
	typeof failureHighlightTypeName
> {
	public constructor(
		availables: Variables,
		node: AbstractSyntaxTreeNode<unknown>,
	) {
		super(availables, node, failureHighlightTypeName);
	}
}
