import type {StartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom} from "./atom/StartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-statement-segment/supported/SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class StartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<StartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: StartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]
		  > {
		const functionCallStatementSegments = this.atom.node;
		const functionCallStatementSegmentsAbstractifyingResult =
			functionCallStatementSegments.abstractify();
		switch (functionCallStatementSegmentsAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const startingWithKnownFunctionCallStatementSegmentsRestAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						functionCallStatementSegmentsAbstractifyingResult.message,
					);
				return startingWithKnownFunctionCallStatementSegmentsRestAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedFunctionCallStatementSegments =
					functionCallStatementSegmentsAbstractifyingResult.data;
				const abstractifiedStartingWithKnownFunctionCallStatementSegmentsRest: readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[] =
					abstractifiedFunctionCallStatementSegments;
				const startingWithKnownFunctionCallStatementSegmentsRestAbstractifyingResult: SuccessAbstractifyingResult<
					readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]
				> = new SuccessAbstractifyingResult(
					abstractifiedStartingWithKnownFunctionCallStatementSegmentsRest,
				);
				return startingWithKnownFunctionCallStatementSegmentsRestAbstractifyingResult;
			}
		}
	}
}
