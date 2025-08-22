import type {EndingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren} from "./children/EndingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren.ts";
import {endingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/endingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {KnownFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/function-call-segment/implementations/known/KnownFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/function-call-segment/supported/SupportedFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import type {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class EndingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	EndingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren,
	typeof endingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: EndingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(
			children,
			endingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly [
					...(readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]),
					KnownFunctionCallSegmentAbstractSyntaxTreeNode,
				]
		  > {
		if (this.children[0] === null) {
			const knownFunctionCallSegmentResult = this.children[1].abstractify();
			switch (knownFunctionCallSegmentResult.typeName) {
				case errorAbstractifyingResultTypeName: {
					return knownFunctionCallSegmentResult;
				}
				case successAbstractifyingResultTypeName: {
					const result = new SuccessAbstractifyingResult<
						readonly [KnownFunctionCallSegmentAbstractSyntaxTreeNode]
					>([knownFunctionCallSegmentResult.data]);
					return result;
				}
			}
		} else {
			const restSegmentsResult = this.children[0].abstractify();
			switch (restSegmentsResult.typeName) {
				case errorAbstractifyingResultTypeName: {
					return restSegmentsResult;
				}
				case successAbstractifyingResultTypeName: {
					const knownFunctionCallSegmentResult = this.children[1].abstractify();
					switch (knownFunctionCallSegmentResult.typeName) {
						case errorAbstractifyingResultTypeName: {
							return knownFunctionCallSegmentResult;
						}
						case successAbstractifyingResultTypeName: {
							const result = new SuccessAbstractifyingResult<
								readonly [
									...(readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]),
									KnownFunctionCallSegmentAbstractSyntaxTreeNode,
								]
							>([
								...restSegmentsResult.data,
								knownFunctionCallSegmentResult.data,
							]);
							return result;
						}
					}
				}
			}
		}
	}
}
