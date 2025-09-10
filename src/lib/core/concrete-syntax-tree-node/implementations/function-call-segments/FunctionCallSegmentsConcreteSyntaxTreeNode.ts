import type {FunctionCallSegmentsConcreteSyntaxTreeNodeAtom} from "./atom/FunctionCallSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-segment/supported/SupportedFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class FunctionCallSegmentsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<FunctionCallSegmentsConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: FunctionCallSegmentsConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly [
					SupportedFunctionCallSegmentAbstractSyntaxTreeNode,
					...(readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]),
				]
		  > {
		const startingFunctionCallSegments = this.atom.node;
		const startingFunctionCallSegmentsAbstractifyingResult =
			startingFunctionCallSegments.abstractify();
		switch (startingFunctionCallSegmentsAbstractifyingResult.typeName) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedStartingFunctionCallSegments =
					startingFunctionCallSegmentsAbstractifyingResult.data;
				const abstractifiedFunctionCallSegments: readonly [
					SupportedFunctionCallSegmentAbstractSyntaxTreeNode,
					...(readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]),
				] = abstractifiedStartingFunctionCallSegments;
				const functionCallSegmentsAbstractifyingResult: SuccessAbstractifyingResult<
					readonly [
						SupportedFunctionCallSegmentAbstractSyntaxTreeNode,
						...(readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]),
					]
				> = new SuccessAbstractifyingResult(abstractifiedFunctionCallSegments);
				return functionCallSegmentsAbstractifyingResult;
			}
			case errorAbstractifyingResultTypeName: {
				const functionCallSegmentsAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						startingFunctionCallSegmentsAbstractifyingResult.message,
					);
				return functionCallSegmentsAbstractifyingResult;
			}
		}
	}
}
