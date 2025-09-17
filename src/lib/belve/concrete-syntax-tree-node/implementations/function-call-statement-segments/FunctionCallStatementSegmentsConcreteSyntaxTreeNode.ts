import type {FunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom} from "./atom/FunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-statement-segment/supported/SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class FunctionCallStatementSegmentsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<FunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: FunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly [
					SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode,
					...(readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]),
				]
		  > {
		const startingFunctionCallStatementSegments = this.atom.node;
		const startingFunctionCallStatementSegmentsAbstractifyingResult =
			startingFunctionCallStatementSegments.abstractify();
		switch (
			startingFunctionCallStatementSegmentsAbstractifyingResult.typeName
		) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedStartingFunctionCallStatementSegments =
					startingFunctionCallStatementSegmentsAbstractifyingResult.data;
				const abstractifiedFunctionCallStatementSegments: readonly [
					SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode,
					...(readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]),
				] = abstractifiedStartingFunctionCallStatementSegments;
				const functionCallStatementSegmentsAbstractifyingResult: SuccessAbstractifyingResult<
					readonly [
						SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode,
						...(readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]),
					]
				> = new SuccessAbstractifyingResult(
					abstractifiedFunctionCallStatementSegments,
				);
				return functionCallStatementSegmentsAbstractifyingResult;
			}
			case errorAbstractifyingResultTypeName: {
				const functionCallStatementSegmentsAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						startingFunctionCallStatementSegmentsAbstractifyingResult.message,
					);
				return functionCallStatementSegmentsAbstractifyingResult;
			}
		}
	}
}
