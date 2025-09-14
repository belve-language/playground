import type {StartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom} from "./atom/StartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-header-segment/supported/SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class StartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<StartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: StartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom,
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
				const abstractifiedStartingWithWordFunctionHeaderSegmentsRest: readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[] =
					abstractifiedFunctionHeaderSegments;
				const startingWithWordFunctionHeaderSegmentsAbstractifyingResult: SuccessAbstractifyingResult<
					readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]
				> = new SuccessAbstractifyingResult(
					abstractifiedStartingWithWordFunctionHeaderSegmentsRest,
				);
				return startingWithWordFunctionHeaderSegmentsAbstractifyingResult;
			}
			case errorAbstractifyingResultTypeName: {
				const startingWithWordFunctionHeaderSegmentsAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						functionHeaderSegmentsAbstractifyingResult.message,
					);
				return startingWithWordFunctionHeaderSegmentsAbstractifyingResult;
			}
		}
	}
}
