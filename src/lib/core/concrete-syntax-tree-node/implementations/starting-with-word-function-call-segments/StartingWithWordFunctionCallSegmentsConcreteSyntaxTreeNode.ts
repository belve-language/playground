import type {StartingWithWordFunctionCallSegmentsConcreteSyntaxTreeNodeAtom} from "./atom/StartingWithWordFunctionCallSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {WordFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-segment/implementations/word/WordFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-segment/supported/SupportedFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class StartingWithWordFunctionCallSegmentsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<StartingWithWordFunctionCallSegmentsConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: StartingWithWordFunctionCallSegmentsConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly [
					WordFunctionCallSegmentAbstractSyntaxTreeNode,
					...(readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]),
				]
		  > {
		const wordFunctionCallSegment = this.atom.leftSubAtom.node;
		const optionalStartingWithWordFunctionCallSegmentsRest =
			this.atom.rightSubAtom.node;
		const abstractifiedWordFunctionCallSegment =
			wordFunctionCallSegment.abstractify();
		const optionalStartingWithWordFunctionCallSegmentsRestAbstractifyingResult =
			optionalStartingWithWordFunctionCallSegmentsRest.abstractify();
		switch (
			optionalStartingWithWordFunctionCallSegmentsRestAbstractifyingResult.typeName
		) {
			case errorAbstractifyingResultTypeName: {
				const startingWithWordFunctionCallSegmentsAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						optionalStartingWithWordFunctionCallSegmentsRestAbstractifyingResult.message,
					);
				return startingWithWordFunctionCallSegmentsAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedOptionalStartingWithWordFunctionCallSegmentsRest =
					optionalStartingWithWordFunctionCallSegmentsRestAbstractifyingResult.data;
				const abstractifiedStartingWithWordFunctionCallSegments: readonly [
					WordFunctionCallSegmentAbstractSyntaxTreeNode,
					...(readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]),
				] = [
					abstractifiedWordFunctionCallSegment,
					...abstractifiedOptionalStartingWithWordFunctionCallSegmentsRest,
				];
				const startingWithWordFunctionCallSegmentsAbstractifyingResult: SuccessAbstractifyingResult<
					readonly [
						WordFunctionCallSegmentAbstractSyntaxTreeNode,
						...(readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]),
					]
				> = new SuccessAbstractifyingResult(
					abstractifiedStartingWithWordFunctionCallSegments,
				);
				return startingWithWordFunctionCallSegmentsAbstractifyingResult;
			}
		}
	}
}
