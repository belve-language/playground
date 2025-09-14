import type {StartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom} from "./atom/StartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-segment/supported/SupportedFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class StartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<StartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: StartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]
		  > {
		const functionCallSegments = this.atom.node;
		const functionCallSegmentsAbstractifyingResult =
			functionCallSegments.abstractify();
		switch (functionCallSegmentsAbstractifyingResult.typeName) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedFunctionCallSegments =
					functionCallSegmentsAbstractifyingResult.data;
				const abstractifiedStartingWithKnownFunctionCallSegmentsRest: readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[] =
					abstractifiedFunctionCallSegments;
				const startingWithKnownFunctionCallSegmentsRestAbstractifyingResult: SuccessAbstractifyingResult<
					readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]
				> = new SuccessAbstractifyingResult(
					abstractifiedStartingWithKnownFunctionCallSegmentsRest,
				);
				return startingWithKnownFunctionCallSegmentsRestAbstractifyingResult;
			}
			case errorAbstractifyingResultTypeName: {
				const startingWithKnownFunctionCallSegmentsRestAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						functionCallSegmentsAbstractifyingResult.message,
					);
				return startingWithKnownFunctionCallSegmentsRestAbstractifyingResult;
			}
		}
	}
}
