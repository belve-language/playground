import type {Index} from "../../../../index/Index.ts";
import {ConcreteSyntaxTreeNode} from "../../../ConcreteSyntaxTreeNode.ts";
export abstract class BranchConcreteSyntaxTreeNodeBuilder<
	Children extends readonly (ConcreteSyntaxTreeNode | null)[],
> {
	protected constructor(children: Children, startingIndex: Index) {
		this.children = children;
		this.startingIndex = startingIndex;
	}
	public readonly children: Children;
	public readonly startingIndex: Index;
}
