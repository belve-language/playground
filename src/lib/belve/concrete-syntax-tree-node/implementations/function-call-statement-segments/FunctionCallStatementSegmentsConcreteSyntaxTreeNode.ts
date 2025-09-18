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
		const implementationFunctionCallStatementSegments = this.atom.node;
		const implementationFunctionCallStatementSegmentsAbstractifyingResult =
			implementationFunctionCallStatementSegments.abstractify();
		switch (
			implementationFunctionCallStatementSegmentsAbstractifyingResult.typeName
		) {
			case errorAbstractifyingResultTypeName: {
				const functionCallStatementSegmentsAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						implementationFunctionCallStatementSegmentsAbstractifyingResult.message,
					);
				return functionCallStatementSegmentsAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedImplementationFunctionCallStatementSegments =
					implementationFunctionCallStatementSegmentsAbstractifyingResult.data;
				const abstractifiedFunctionCallStatementSegments: readonly [
					SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode,
					...(readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]),
				] = abstractifiedImplementationFunctionCallStatementSegments;
				const functionCallStatementSegmentsAbstractifyingResult: SuccessAbstractifyingResult<
					readonly [
						SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode,
						...(readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]),
					]
				> = new SuccessAbstractifyingResult<
					readonly [
						SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode,
						...(readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]),
					]
				>(abstractifiedFunctionCallStatementSegments);
				return functionCallStatementSegmentsAbstractifyingResult;
			}
		}
	}
}
