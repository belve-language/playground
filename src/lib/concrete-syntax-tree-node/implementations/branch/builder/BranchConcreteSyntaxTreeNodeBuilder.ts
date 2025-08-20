import type {Index} from "../../../../index/Index.ts";
import {ConcreteSyntaxTreeNode} from "../../../ConcreteSyntaxTreeNode.ts";
export abstract class BranchConcreteSyntaxTreeNodeBuilder<
	Children extends readonly (ConcreteSyntaxTreeNode<string> | null)[],
> {
	protected constructor(children: Children) {
		this.children = children;
	}
	public readonly children: Children;
	public computeSpanIndexesStartingIndex(): Index {
		for (const child of this.children) {
			if (child !== null) {
				return child.computeSpanIndexesStartingIndex();
			}
		}
		throw new Error(
			"No children found to compute span indexes starting index.",
		);
	}
}
