import type {StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom} from "./atom/StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {KnownFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-header-segment/implementations/known/KnownFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-header-segment/supported/SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly [
					KnownFunctionHeaderSegmentAbstractSyntaxTreeNode,
					...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
				]
		  > {
		const knownFunctionHeaderSegment = this.atom.leftSubAtom.node;
		const knownFunctionHeaderSegmentAbstractifyingResult =
			knownFunctionHeaderSegment.abstractify();
		switch (knownFunctionHeaderSegmentAbstractifyingResult.typeName) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedKnownFunctionHeaderSegment =
					knownFunctionHeaderSegmentAbstractifyingResult.data;
				const optionalStartingWithKnownFunctionHeaderSegmentsRest =
					this.atom.rightSubAtom.node;
				const optionalStartingWithKnownFunctionHeaderSegmentsRestAbstractifyingResult =
					optionalStartingWithKnownFunctionHeaderSegmentsRest.abstractify();
				switch (
					optionalStartingWithKnownFunctionHeaderSegmentsRestAbstractifyingResult.typeName
				) {
					case errorAbstractifyingResultTypeName: {
						const startingWithKnownFunctionHeaderSegmentsAbstractifyingResult: ErrorAbstractifyingResult =
							new ErrorAbstractifyingResult(
								optionalStartingWithKnownFunctionHeaderSegmentsRestAbstractifyingResult.message,
							);
						return startingWithKnownFunctionHeaderSegmentsAbstractifyingResult;
					}
					case successAbstractifyingResultTypeName: {
						const abstractifiedOptionalStartingWithKnownFunctionHeaderSegmentsRest =
							optionalStartingWithKnownFunctionHeaderSegmentsRestAbstractifyingResult.data;
						const abstractifiedStartingWithKnownFunctionHeaderSegments: readonly [
							KnownFunctionHeaderSegmentAbstractSyntaxTreeNode,
							...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
						] = [
							abstractifiedKnownFunctionHeaderSegment,
							...abstractifiedOptionalStartingWithKnownFunctionHeaderSegmentsRest,
						];
						const startingWithKnownFunctionHeaderSegmentsAbstractifyingResult: SuccessAbstractifyingResult<
							readonly [
								KnownFunctionHeaderSegmentAbstractSyntaxTreeNode,
								...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
							]
						> = new SuccessAbstractifyingResult(
							abstractifiedStartingWithKnownFunctionHeaderSegments,
						);
						return startingWithKnownFunctionHeaderSegmentsAbstractifyingResult;
					}
				}
			}
			case errorAbstractifyingResultTypeName: {
				const startingWithKnownFunctionHeaderSegmentsAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						knownFunctionHeaderSegmentAbstractifyingResult.message,
					);
				return startingWithKnownFunctionHeaderSegmentsAbstractifyingResult;
			}
		}
	}
}
