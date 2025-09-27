import type {AbstractSyntaxTreeNode} from "../../../../../../../../../../../../belve/abstract-syntax-tree-node/AbstractSyntaxTreeNode.ts";
import type {Variables} from "../../../../../../../../../../../../belve/variables/Variables.ts";
import {Highlight} from "../../Highlight.ts";
import {stepHighlightTypeName} from "./type-name/stepHighlightTypeName.ts";
export class StepHighlight extends Highlight<typeof stepHighlightTypeName> {
	public constructor(
		availables: Variables,
		node: AbstractSyntaxTreeNode<unknown>,
	) {
		super(availables, node, stepHighlightTypeName);
	}
}
