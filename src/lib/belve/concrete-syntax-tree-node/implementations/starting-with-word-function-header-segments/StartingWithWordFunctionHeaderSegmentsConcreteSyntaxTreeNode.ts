import type {StartingWithWordFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom} from "./atom/StartingWithWordFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {WordFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-header-segment/implementations/word/WordFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-header-segment/supported/SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class StartingWithWordFunctionHeaderSegmentsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<StartingWithWordFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: StartingWithWordFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly [
					WordFunctionHeaderSegmentAbstractSyntaxTreeNode,
					...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
				]
		  > {
		const wordFunctionHeaderSegment = this.atom.leftSubAtom.node;
		const optionalStartingWithWordFunctionHeaderSegmentsRest =
			this.atom.rightSubAtom.node;
		const abstractifiedWordFunctionHeaderSegment =
			wordFunctionHeaderSegment.abstractify();
		const optionalStartingWithWordFunctionHeaderSegmentsRestAbstractifyingResult =
			optionalStartingWithWordFunctionHeaderSegmentsRest.abstractify();
		switch (
			optionalStartingWithWordFunctionHeaderSegmentsRestAbstractifyingResult.typeName
		) {
			case errorAbstractifyingResultTypeName: {
				const startingWithWordFunctionHeaderSegmentsAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						optionalStartingWithWordFunctionHeaderSegmentsRestAbstractifyingResult.message,
					);
				return startingWithWordFunctionHeaderSegmentsAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedOptionalStartingWithWordFunctionHeaderSegmentsRest =
					optionalStartingWithWordFunctionHeaderSegmentsRestAbstractifyingResult.data;
				const abstractifiedStartingWithWordFunctionHeaderSegments: readonly [
					WordFunctionHeaderSegmentAbstractSyntaxTreeNode,
					...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
				] = [
					abstractifiedWordFunctionHeaderSegment,
					...abstractifiedOptionalStartingWithWordFunctionHeaderSegmentsRest,
				];
				const startingWithWordFunctionHeaderSegmentsAbstractifyingResult: SuccessAbstractifyingResult<
					readonly [
						WordFunctionHeaderSegmentAbstractSyntaxTreeNode,
						...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
					]
				> = new SuccessAbstractifyingResult<
					readonly [
						WordFunctionHeaderSegmentAbstractSyntaxTreeNode,
						...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
					]
				>(abstractifiedStartingWithWordFunctionHeaderSegments);
				return startingWithWordFunctionHeaderSegmentsAbstractifyingResult;
			}
		}
	}
}
