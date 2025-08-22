import type {EndingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren} from "./children/EndingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren.ts";
import {endingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/endingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {UnknownFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/function-call-segment/implementations/unknown/UnknownFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/function-call-segment/supported/SupportedFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import type {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class EndingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	EndingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren,
	typeof endingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: EndingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(
			children,
			endingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly [
					...(readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]),
					UnknownFunctionCallSegmentAbstractSyntaxTreeNode,
				]
		  > {
		if (this.children[0] === null) {
			const unknownFunctionCallSegmentResult = this.children[1].abstractify();
			switch (unknownFunctionCallSegmentResult.typeName) {
				case errorAbstractifyingResultTypeName: {
					return unknownFunctionCallSegmentResult;
				}
				case successAbstractifyingResultTypeName: {
					const result = new SuccessAbstractifyingResult<
						readonly [UnknownFunctionCallSegmentAbstractSyntaxTreeNode]
					>([unknownFunctionCallSegmentResult.data]);
					return result;
				}
			}
		} else {
			const functionCallSegmentsResult = this.children[0].abstractify();
			switch (functionCallSegmentsResult.typeName) {
				case errorAbstractifyingResultTypeName: {
					return functionCallSegmentsResult;
				}
				case successAbstractifyingResultTypeName: {
					const unknownFunctionCallSegmentResult =
						this.children[1].abstractify();
					switch (unknownFunctionCallSegmentResult.typeName) {
						case errorAbstractifyingResultTypeName: {
							return unknownFunctionCallSegmentResult;
						}
						case successAbstractifyingResultTypeName: {
							const result = new SuccessAbstractifyingResult<
								readonly [
									...(readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]),
									UnknownFunctionCallSegmentAbstractSyntaxTreeNode,
								]
							>([
								...functionCallSegmentsResult.data,
								unknownFunctionCallSegmentResult.data,
							]);
							return result;
						}
					}
				}
			}
		}
	}
}
