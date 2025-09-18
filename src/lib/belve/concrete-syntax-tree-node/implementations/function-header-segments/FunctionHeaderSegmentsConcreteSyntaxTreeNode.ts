import type {FunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom} from "./atom/FunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-header-segment/supported/SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class FunctionHeaderSegmentsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<FunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: FunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly [
					SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode,
					...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
				]
		  > {
		const startingFunctionHeaderSegments = this.atom.node;
		const startingFunctionHeaderSegmentsAbstractifyingResult =
			startingFunctionHeaderSegments.abstractify();
		switch (startingFunctionHeaderSegmentsAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const functionHeaderSegmentsAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						startingFunctionHeaderSegmentsAbstractifyingResult.message,
					);
				return functionHeaderSegmentsAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedFunctionHeaderSegments: readonly [
					SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode,
					...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
				] = startingFunctionHeaderSegmentsAbstractifyingResult.data;
				const functionHeaderSegmentsAbstractifyingResult: SuccessAbstractifyingResult<
					readonly [
						SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode,
						...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
					]
				> = new SuccessAbstractifyingResult<
					readonly [
						SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode,
						...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
					]
				>(abstractifiedFunctionHeaderSegments);
				return functionHeaderSegmentsAbstractifyingResult;
			}
		}
	}
}
