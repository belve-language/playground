import type {StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom} from "./atom/StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {KnownFunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-statement-segment/implementations/known/KnownFunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-statement-segment/supported/SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly [
					KnownFunctionCallStatementSegmentAbstractSyntaxTreeNode,
					...(readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]),
				]
		  > {
		const knownFunctionCallStatementSegment = this.atom.leftSubAtom.node;
		const optionalStartingWithKnownFunctionCallStatementSegmentsRest =
			this.atom.rightSubAtom.node;
		const knownFunctionCallStatementSegmentAbstractifyingResult =
			knownFunctionCallStatementSegment.abstractify();
		switch (knownFunctionCallStatementSegmentAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const startingWithKnownFunctionCallStatementSegmentsAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						knownFunctionCallStatementSegmentAbstractifyingResult.message,
					);
				return startingWithKnownFunctionCallStatementSegmentsAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedKnownFunctionCallStatementSegment =
					knownFunctionCallStatementSegmentAbstractifyingResult.data;
				const optionalStartingWithKnownFunctionCallStatementSegmentsRestAbstractifyingResult =
					optionalStartingWithKnownFunctionCallStatementSegmentsRest.abstractify();
				switch (
					optionalStartingWithKnownFunctionCallStatementSegmentsRestAbstractifyingResult.typeName
				) {
					case errorAbstractifyingResultTypeName: {
						const startingWithKnownFunctionCallStatementSegmentsAbstractifyingResult: ErrorAbstractifyingResult =
							new ErrorAbstractifyingResult(
								optionalStartingWithKnownFunctionCallStatementSegmentsRestAbstractifyingResult.message,
							);
						return startingWithKnownFunctionCallStatementSegmentsAbstractifyingResult;
					}
					case successAbstractifyingResultTypeName: {
						const abstractifiedOptionalStartingWithKnownFunctionCallStatementSegmentsRest =
							optionalStartingWithKnownFunctionCallStatementSegmentsRestAbstractifyingResult.data;
						const abstractifiedStartingWithKnownFunctionCallStatementSegments: readonly [
							KnownFunctionCallStatementSegmentAbstractSyntaxTreeNode,
							...(readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]),
						] = [
							abstractifiedKnownFunctionCallStatementSegment,
							...abstractifiedOptionalStartingWithKnownFunctionCallStatementSegmentsRest,
						];
						const startingWithKnownFunctionCallStatementSegmentsAbstractifyingResult: SuccessAbstractifyingResult<
							readonly [
								KnownFunctionCallStatementSegmentAbstractSyntaxTreeNode,
								...(readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]),
							]
						> = new SuccessAbstractifyingResult<
							readonly [
								KnownFunctionCallStatementSegmentAbstractSyntaxTreeNode,
								...(readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]),
							]
						>(abstractifiedStartingWithKnownFunctionCallStatementSegments);
						return startingWithKnownFunctionCallStatementSegmentsAbstractifyingResult;
					}
				}
			}
		}
	}
}
