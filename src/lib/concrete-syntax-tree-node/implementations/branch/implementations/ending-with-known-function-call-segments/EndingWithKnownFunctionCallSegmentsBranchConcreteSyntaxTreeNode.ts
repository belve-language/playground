import type {EndingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren} from "./children/EndingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren.ts";
import {endingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/endingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class EndingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	EndingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren,
	typeof endingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: EndingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			spanIndexes,
			endingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
}
