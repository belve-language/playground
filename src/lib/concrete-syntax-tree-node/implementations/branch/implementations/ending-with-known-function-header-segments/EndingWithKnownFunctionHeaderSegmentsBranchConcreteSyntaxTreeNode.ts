import type {EndingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren} from "./children/EndingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren.ts";
import {endingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/endingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class EndingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	EndingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren,
	typeof endingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: EndingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			spanIndexes,
			endingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
}
