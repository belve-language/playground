import type {FunctionBodyBranchConcreteSyntaxTreeNodeChildren} from "./children/FunctionBodyBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class FunctionBodyBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<FunctionBodyBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: FunctionBodyBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
