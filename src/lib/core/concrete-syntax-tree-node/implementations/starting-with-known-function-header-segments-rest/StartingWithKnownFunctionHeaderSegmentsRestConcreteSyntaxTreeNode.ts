import type {StartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom} from "./atom/StartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-header-segment/supported/SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class StartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<StartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: StartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]
		  > {
		const functionHeaderSegments = this.atom.node;
		const functionHeaderSegmentsAbstractifyingResult =
			functionHeaderSegments.abstractify();
		switch (functionHeaderSegmentsAbstractifyingResult.typeName) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedFunctionHeaderSegments =
					functionHeaderSegmentsAbstractifyingResult.data;
				const abstractifiedStartingWithKnownFunctionHeaderSegmentsRest: readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[] =
					abstractifiedFunctionHeaderSegments;
				const startingWithKnownFunctionHeaderSegmentsRestAbstractifyingResult: SuccessAbstractifyingResult<
					readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]
				> = new SuccessAbstractifyingResult(
					abstractifiedStartingWithKnownFunctionHeaderSegmentsRest,
				);
				return startingWithKnownFunctionHeaderSegmentsRestAbstractifyingResult;
			}
			case errorAbstractifyingResultTypeName: {
				const startingWithKnownFunctionHeaderSegmentsRestAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						functionHeaderSegmentsAbstractifyingResult.message,
					);
				return startingWithKnownFunctionHeaderSegmentsRestAbstractifyingResult;
			}
		}
	}
}
