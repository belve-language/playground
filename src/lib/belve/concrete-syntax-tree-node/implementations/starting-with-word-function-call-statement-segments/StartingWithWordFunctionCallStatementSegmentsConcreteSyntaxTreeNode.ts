import type {StartingWithWordFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom} from "./atom/StartingWithWordFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {WordFunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-statement-segment/implementations/word/WordFunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-statement-segment/supported/SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class StartingWithWordFunctionCallStatementSegmentsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<StartingWithWordFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: StartingWithWordFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly [
					WordFunctionCallStatementSegmentAbstractSyntaxTreeNode,
					...(readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]),
				]
		  > {
		const wordFunctionCallStatementSegment = this.atom.leftSubAtom.node;
		const optionalStartingWithWordFunctionCallStatementSegmentsRest =
			this.atom.rightSubAtom.node;
		const abstractifiedWordFunctionCallStatementSegment =
			wordFunctionCallStatementSegment.abstractify();
		const optionalStartingWithWordFunctionCallStatementSegmentsRestAbstractifyingResult =
			optionalStartingWithWordFunctionCallStatementSegmentsRest.abstractify();
		switch (
			optionalStartingWithWordFunctionCallStatementSegmentsRestAbstractifyingResult.typeName
		) {
			case errorAbstractifyingResultTypeName: {
				const startingWithWordFunctionCallStatementSegmentsAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						optionalStartingWithWordFunctionCallStatementSegmentsRestAbstractifyingResult.message,
					);
				return startingWithWordFunctionCallStatementSegmentsAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedOptionalStartingWithWordFunctionCallStatementSegmentsRest =
					optionalStartingWithWordFunctionCallStatementSegmentsRestAbstractifyingResult.data;
				const abstractifiedStartingWithWordFunctionCallStatementSegments: readonly [
					WordFunctionCallStatementSegmentAbstractSyntaxTreeNode,
					...(readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]),
				] = [
					abstractifiedWordFunctionCallStatementSegment,
					...abstractifiedOptionalStartingWithWordFunctionCallStatementSegmentsRest,
				];
				const startingWithWordFunctionCallStatementSegmentsAbstractifyingResult: SuccessAbstractifyingResult<
					readonly [
						WordFunctionCallStatementSegmentAbstractSyntaxTreeNode,
						...(readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]),
					]
				> = new SuccessAbstractifyingResult<
					readonly [
						WordFunctionCallStatementSegmentAbstractSyntaxTreeNode,
						...(readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]),
					]
				>(abstractifiedStartingWithWordFunctionCallStatementSegments);
				return startingWithWordFunctionCallStatementSegmentsAbstractifyingResult;
			}
		}
	}
}
