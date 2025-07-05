import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {LeafAbstractSyntaxTreeNodeData} from "./data/LeafAbstractSyntaxTreeNodeData.ts";
export abstract class LeafAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode<Data> {
	protected constructor(data: Data) {
		super(data);
	}
}
