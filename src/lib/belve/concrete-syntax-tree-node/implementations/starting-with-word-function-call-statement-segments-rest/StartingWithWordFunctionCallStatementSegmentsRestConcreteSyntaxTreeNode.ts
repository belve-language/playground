import type {StartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom} from "./atom/StartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-statement-segment/supported/SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class StartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<StartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: StartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom,
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
				const abstractifiedStartingWithWordFunctionCallStatementSegmentsRest: readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[] =
					abstractifiedFunctionCallStatementSegments;
				const startingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAbstractifyingResult: SuccessAbstractifyingResult<
					readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]
				> = new SuccessAbstractifyingResult(
					abstractifiedStartingWithWordFunctionCallStatementSegmentsRest,
				);
				return startingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAbstractifyingResult;
			}
			case errorAbstractifyingResultTypeName: {
				const startingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						functionCallStatementSegmentsAbstractifyingResult.message,
					);
				return startingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAbstractifyingResult;
			}
		}
	}
}
