import type {UnknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren} from "./children/UnknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren.ts";
import {unknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/unknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import {whitespaceBranchConcreteSyntaxTreeNodeTypeName} from "../whitespace/type-name/whitespaceBranchConcreteSyntaxTreeNodeTypeName.ts";
export class UnknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	UnknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren,
	typeof unknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: UnknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(
			children,
			unknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<string> {
		if (
			this.children[0].typeName
			=== whitespaceBranchConcreteSyntaxTreeNodeTypeName
		) {
			const result = new ErrorAbstractifyingResult("No variable name.");
			return result;
		} else {
			const name = this.children[0].abstractify();
			const result = new SuccessAbstractifyingResult(name);
			return result;
		}
	}
}
