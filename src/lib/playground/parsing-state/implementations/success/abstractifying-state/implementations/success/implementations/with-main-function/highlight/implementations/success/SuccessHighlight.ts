import type {AbstractSyntaxTreeNode} from "../../../../../../../../../../../../belve/abstract-syntax-tree-node/AbstractSyntaxTreeNode.ts";
import type {Variables} from "../../../../../../../../../../../../belve/variables/Variables.ts";
import {Highlight} from "../../Highlight.ts";
import {successHighlightTypeName} from "./type-name/successHighlightTypeName.ts";
export class SuccessHighlight extends Highlight<
	typeof successHighlightTypeName
> {
	public constructor(
		availables: Variables,
		node: AbstractSyntaxTreeNode<unknown>,
		unknowns: Variables,
	) {
		super(availables, node, successHighlightTypeName);
		this.unknowns = unknowns;
	}
	public readonly unknowns: Variables;
}
