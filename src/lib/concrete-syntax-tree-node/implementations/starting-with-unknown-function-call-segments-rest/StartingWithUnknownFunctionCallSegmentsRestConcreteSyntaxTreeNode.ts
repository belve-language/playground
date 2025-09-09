import type {StartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom} from "./atom/StartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-segment/supported/SupportedFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class StartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<StartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: StartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom,
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
				const abstractifiedStartingWithUnknownFunctionCallSegmentsRest =
					abstractifiedFunctionCallSegments;
				const startingWithUnknownFunctionCallSegmentsRestAbstractifyingResult: SuccessAbstractifyingResult<
					readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]
				> = new SuccessAbstractifyingResult(
					abstractifiedStartingWithUnknownFunctionCallSegmentsRest,
				);
				return startingWithUnknownFunctionCallSegmentsRestAbstractifyingResult;
			}
			case errorAbstractifyingResultTypeName: {
				const startingWithUnknownFunctionCallSegmentsRestAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						functionCallSegmentsAbstractifyingResult.message,
					);
				return startingWithUnknownFunctionCallSegmentsRestAbstractifyingResult;
			}
		}
	}
}
