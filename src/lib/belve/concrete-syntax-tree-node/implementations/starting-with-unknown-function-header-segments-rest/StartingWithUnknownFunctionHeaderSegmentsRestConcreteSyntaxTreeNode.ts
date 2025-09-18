import type {StartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom} from "./atom/StartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-header-segment/supported/SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class StartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<StartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: StartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom,
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
			case errorAbstractifyingResultTypeName: {
				const startingWithUnknownFunctionHeaderSegmentsRestAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						functionHeaderSegmentsAbstractifyingResult.message,
					);
				return startingWithUnknownFunctionHeaderSegmentsRestAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedFunctionHeaderSegments =
					functionHeaderSegmentsAbstractifyingResult.data;
				const abstractifiedStartingWithUnknownFunctionHeaderSegmentsRest: readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[] =
					abstractifiedFunctionHeaderSegments;
				const startingWithUnknownFunctionHeaderSegmentsRestAbstractifyingResult: SuccessAbstractifyingResult<
					readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]
				> = new SuccessAbstractifyingResult<
					readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]
				>(abstractifiedStartingWithUnknownFunctionHeaderSegmentsRest);
				return startingWithUnknownFunctionHeaderSegmentsRestAbstractifyingResult;
			}
		}
	}
}
