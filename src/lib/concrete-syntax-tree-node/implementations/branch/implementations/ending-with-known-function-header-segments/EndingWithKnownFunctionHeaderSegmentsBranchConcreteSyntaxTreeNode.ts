import type {EndingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren} from "./children/EndingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren.ts";
import {endingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/endingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {KnownFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/function-header-segment/implementations/known/KnownFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import type {WordFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/function-header-segment/implementations/word/WordFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/function-header-segment/supported/SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import type {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class EndingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	EndingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren,
	typeof endingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeTypeName
> {
	private constructor(
		children: EndingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(
			children,
			endingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly [
					...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
					KnownFunctionHeaderSegmentAbstractSyntaxTreeNode,
				]
		  > {
		if (this.children[0] === null) {
			const knownFunctionHeaderSegmentResult = this.children[1].abstractify();
			switch (knownFunctionHeaderSegmentResult.typeName) {
				case errorAbstractifyingResultTypeName: {
					return knownFunctionHeaderSegmentResult;
				}
				case successAbstractifyingResultTypeName: {
					const result = new SuccessAbstractifyingResult<
						readonly [KnownFunctionHeaderSegmentAbstractSyntaxTreeNode]
					>([knownFunctionHeaderSegmentResult.data]);
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
					const knownFunctionHeaderSegmentResult =
						this.children[1].abstractify();
					switch (knownFunctionHeaderSegmentResult.typeName) {
						case errorAbstractifyingResultTypeName: {
							return knownFunctionHeaderSegmentResult;
						}
						case successAbstractifyingResultTypeName: {
							const result = new SuccessAbstractifyingResult<
								readonly [
									...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
									KnownFunctionHeaderSegmentAbstractSyntaxTreeNode,
								]
							>([
								...restSegmentsResult.data,
								knownFunctionHeaderSegmentResult.data,
							]);
							return result;
						}
					}
				}
			}
		}
	}
}
