import type {StartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom} from "./atom/StartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-statement-segment/supported/SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class StartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<StartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: StartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom,
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
			case successAbstractifyingResultTypeName: {
				const abstractifiedFunctionCallStatementSegments =
					functionCallStatementSegmentsAbstractifyingResult.data;
				const abstractifiedStartingWithUnknownFunctionCallStatementSegmentsRest =
					abstractifiedFunctionCallStatementSegments;
				const startingWithUnknownFunctionCallStatementSegmentsRestAbstractifyingResult: SuccessAbstractifyingResult<
					readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]
				> = new SuccessAbstractifyingResult(
					abstractifiedStartingWithUnknownFunctionCallStatementSegmentsRest,
				);
				return startingWithUnknownFunctionCallStatementSegmentsRestAbstractifyingResult;
			}
			case errorAbstractifyingResultTypeName: {
				const startingWithUnknownFunctionCallStatementSegmentsRestAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						functionCallStatementSegmentsAbstractifyingResult.message,
					);
				return startingWithUnknownFunctionCallStatementSegmentsRestAbstractifyingResult;
			}
		}
	}
}
