import type {EndingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren} from "./children/EndingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren.ts";
import {endingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/endingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {WordFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/function-call-segment/implementations/word/WordFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/function-call-segment/supported/SupportedFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import type {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class EndingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	EndingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren,
	typeof endingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: EndingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(
			children,
			endingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly [
					...(readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]),
					WordFunctionCallSegmentAbstractSyntaxTreeNode,
				]
		  > {
		if (this.children[0] === null) {
			const wordFunctionCallSegment = this.children[1].abstractify();
			const result = new SuccessAbstractifyingResult<
				[
					...(readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]),
					WordFunctionCallSegmentAbstractSyntaxTreeNode,
				]
			>([wordFunctionCallSegment]);
			return result;
		} else {
			const restSegmentsResult = this.children[0].abstractify();
			switch (restSegmentsResult.typeName) {
				case errorAbstractifyingResultTypeName: {
					return restSegmentsResult;
				}
				case successAbstractifyingResultTypeName: {
					const wordFunctionCallSegment = this.children[1].abstractify();
					const result = new SuccessAbstractifyingResult<
						[
							...(readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]),
							WordFunctionCallSegmentAbstractSyntaxTreeNode,
						]
					>([...restSegmentsResult.data, wordFunctionCallSegment]);
					return result;
				}
			}
		}
	}
}
