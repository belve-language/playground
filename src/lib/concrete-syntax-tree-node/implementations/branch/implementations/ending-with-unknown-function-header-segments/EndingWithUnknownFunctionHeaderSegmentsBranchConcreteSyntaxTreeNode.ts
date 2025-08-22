import type {EndingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren} from "./children/EndingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren.ts";
import type {UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/function-header-segment/implementations/unknown/UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/function-header-segment/supported/SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import {endingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/endingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class EndingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	EndingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren,
	typeof endingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: EndingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(
			children,
			endingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly [
					...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
					UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode,
				]
		  > {
		if (this.children[0] === null) {
			const unknownFunctionHeaderSegmentResult = this.children[1].abstractify();
			switch (unknownFunctionHeaderSegmentResult.typeName) {
				case errorAbstractifyingResultTypeName: {
					return unknownFunctionHeaderSegmentResult;
				}
				case successAbstractifyingResultTypeName: {
					const result = new SuccessAbstractifyingResult<
						readonly [
							...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
							UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode,
						]
					>([unknownFunctionHeaderSegmentResult.data]);
					return result;
				}
			}
		} else {
			const functionHeaderSegmentsResult = this.children[0].abstractify();
			switch (functionHeaderSegmentsResult.typeName) {
				case errorAbstractifyingResultTypeName: {
					return functionHeaderSegmentsResult;
				}
				case successAbstractifyingResultTypeName: {
					const unknownFunctionHeaderSegmentResult =
						this.children[1].abstractify();
					switch (unknownFunctionHeaderSegmentResult.typeName) {
						case errorAbstractifyingResultTypeName: {
							return unknownFunctionHeaderSegmentResult;
						}
						case successAbstractifyingResultTypeName: {
							const result = new SuccessAbstractifyingResult<
								readonly [
									...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
									UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode,
								]
							>([
								...functionHeaderSegmentsResult.data,
								unknownFunctionHeaderSegmentResult.data,
							]);
							return result;
						}
					}
				}
			}
		}
	}
}
