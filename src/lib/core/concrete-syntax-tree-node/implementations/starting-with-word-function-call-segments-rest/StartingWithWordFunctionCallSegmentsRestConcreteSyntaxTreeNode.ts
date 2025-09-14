import type {StartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom} from "./atom/StartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-segment/supported/SupportedFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class StartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<StartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: StartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom,
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
				const abstractifiedStartingWithWordFunctionCallSegmentsRest: readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[] =
					abstractifiedFunctionCallSegments;
				const startingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNodeAbstractifyingResult: SuccessAbstractifyingResult<
					readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]
				> = new SuccessAbstractifyingResult(
					abstractifiedStartingWithWordFunctionCallSegmentsRest,
				);
				return startingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNodeAbstractifyingResult;
			}
			case errorAbstractifyingResultTypeName: {
				const startingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNodeAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						functionCallSegmentsAbstractifyingResult.message,
					);
				return startingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNodeAbstractifyingResult;
			}
		}
	}
}
