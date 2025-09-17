import type {StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom} from "./atom/StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {UnknownFunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-statement-segment/implementations/unknown/UnknownFunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-statement-segment/supported/SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly [
					UnknownFunctionCallStatementSegmentAbstractSyntaxTreeNode,
					...(readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]),
				]
		  > {
		const unknownFunctionCallStatementSegment = this.atom.leftSubAtom.node;
		const optionalStartingWithUnknownFunctionCallStatementSegmentsRest =
			this.atom.rightSubAtom.node;
		const unknownFunctionCallStatementSegmentAbstractifyingResult =
			unknownFunctionCallStatementSegment.abstractify();
		switch (unknownFunctionCallStatementSegmentAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const startingWithUnknownFunctionCallStatementSegmentsAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						unknownFunctionCallStatementSegmentAbstractifyingResult.message,
					);
				return startingWithUnknownFunctionCallStatementSegmentsAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedUnknownFunctionCallStatementSegment =
					unknownFunctionCallStatementSegmentAbstractifyingResult.data;
				const optionalStartingWithUnknownFunctionCallStatementSegmentsRestAbstractifyingResult =
					optionalStartingWithUnknownFunctionCallStatementSegmentsRest.abstractify();
				switch (
					optionalStartingWithUnknownFunctionCallStatementSegmentsRestAbstractifyingResult.typeName
				) {
					case errorAbstractifyingResultTypeName: {
						const startingWithUnknownFunctionCallStatementSegmentsAbstractifyingResult: ErrorAbstractifyingResult =
							new ErrorAbstractifyingResult(
								optionalStartingWithUnknownFunctionCallStatementSegmentsRestAbstractifyingResult.message,
							);
						return startingWithUnknownFunctionCallStatementSegmentsAbstractifyingResult;
					}
					case successAbstractifyingResultTypeName: {
						const abstractifiedOptionalStartingWithUnknownFunctionCallStatementSegmentsRest =
							optionalStartingWithUnknownFunctionCallStatementSegmentsRestAbstractifyingResult.data;
						const abstractifiedStartingWithUnknownFunctionCallStatementSegments: readonly [
							UnknownFunctionCallStatementSegmentAbstractSyntaxTreeNode,
							...(readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]),
						] = [
							abstractifiedUnknownFunctionCallStatementSegment,
							...abstractifiedOptionalStartingWithUnknownFunctionCallStatementSegmentsRest,
						];
						const startingWithUnknownFunctionCallStatementSegmentsAbstractifyingResult: SuccessAbstractifyingResult<
							readonly [
								UnknownFunctionCallStatementSegmentAbstractSyntaxTreeNode,
								...(readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]),
							]
						> = new SuccessAbstractifyingResult(
							abstractifiedStartingWithUnknownFunctionCallStatementSegments,
						);
						return startingWithUnknownFunctionCallStatementSegmentsAbstractifyingResult;
					}
				}
			}
		}
	}
}
