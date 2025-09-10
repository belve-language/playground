import type {StartingWithKnownFunctionCallSegmentsConcreteSyntaxTreeNodeAtom} from "./atom/StartingWithKnownFunctionCallSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {KnownFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-segment/implementations/known/KnownFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-segment/supported/SupportedFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class StartingWithKnownFunctionCallSegmentsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<StartingWithKnownFunctionCallSegmentsConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: StartingWithKnownFunctionCallSegmentsConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly [
					KnownFunctionCallSegmentAbstractSyntaxTreeNode,
					...(readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]),
				]
		  > {
		const knownFunctionCallSegment = this.atom.leftSubAtom.node;
		const optionalStartingWithKnownFunctionCallSegmentsRest =
			this.atom.rightSubAtom.node;
		const knownFunctionCallSegmentAbstractifyingResult =
			knownFunctionCallSegment.abstractify();
		switch (knownFunctionCallSegmentAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const startingWithKnownFunctionCallSegmentsAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						knownFunctionCallSegmentAbstractifyingResult.message,
					);
				return startingWithKnownFunctionCallSegmentsAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedKnownFunctionCallSegment =
					knownFunctionCallSegmentAbstractifyingResult.data;
				const optionalStartingWithKnownFunctionCallSegmentsRestAbstractifyingResult =
					optionalStartingWithKnownFunctionCallSegmentsRest.abstractify();
				switch (
					optionalStartingWithKnownFunctionCallSegmentsRestAbstractifyingResult.typeName
				) {
					case errorAbstractifyingResultTypeName: {
						const startingWithKnownFunctionCallSegmentsAbstractifyingResult: ErrorAbstractifyingResult =
							new ErrorAbstractifyingResult(
								optionalStartingWithKnownFunctionCallSegmentsRestAbstractifyingResult.message,
							);
						return startingWithKnownFunctionCallSegmentsAbstractifyingResult;
					}
					case successAbstractifyingResultTypeName: {
						const abstractifiedOptionalStartingWithKnownFunctionCallSegmentsRest =
							optionalStartingWithKnownFunctionCallSegmentsRestAbstractifyingResult.data;
						const abstractifiedStartingWithKnownFunctionCallSegments: readonly [
							KnownFunctionCallSegmentAbstractSyntaxTreeNode,
							...(readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]),
						] = [
							abstractifiedKnownFunctionCallSegment,
							...abstractifiedOptionalStartingWithKnownFunctionCallSegmentsRest,
						];
						const startingWithKnownFunctionCallSegmentsAbstractifyingResult: SuccessAbstractifyingResult<
							readonly [
								KnownFunctionCallSegmentAbstractSyntaxTreeNode,
								...(readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]),
							]
						> = new SuccessAbstractifyingResult(
							abstractifiedStartingWithKnownFunctionCallSegments,
						);
						return startingWithKnownFunctionCallSegmentsAbstractifyingResult;
					}
				}
			}
		}
	}
}
