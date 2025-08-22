import type {EndingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren} from "./children/EndingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren.ts";
import type {WordFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/function-header-segment/implementations/word/WordFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {errorAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import {endingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/endingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/function-header-segment/supported/SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import type {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class EndingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	EndingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren,
	typeof endingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: EndingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(
			children,
			endingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly [
					...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
					WordFunctionHeaderSegmentAbstractSyntaxTreeNode,
				]
		  > {
		if (this.children[0] === null) {
			const wordFunctionHeaderSegment = this.children[1].abstractify();
			const result = new SuccessAbstractifyingResult<
				[
					...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
					WordFunctionHeaderSegmentAbstractSyntaxTreeNode,
				]
			>([wordFunctionHeaderSegment]);
			return result;
		} else {
			const restSegmentsResult = this.children[0].abstractify();
			switch (restSegmentsResult.typeName) {
				case errorAbstractifyingResultTypeName: {
					return restSegmentsResult;
				}
				case successAbstractifyingResultTypeName: {
					const wordFunctionHeaderSegment = this.children[1].abstractify();
					const result = new SuccessAbstractifyingResult<
						readonly [
							...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
							WordFunctionHeaderSegmentAbstractSyntaxTreeNode,
						]
					>([...restSegmentsResult.data, wordFunctionHeaderSegment]);
					return result;
				}
			}
		}
	}
}
