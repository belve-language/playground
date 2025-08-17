import type {PaddedVariableNameBranchConcreteSyntaxTreeNodeChildren} from "./children/PaddedVariableNameBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class PaddedVariableNameBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<PaddedVariableNameBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: PaddedVariableNameBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
