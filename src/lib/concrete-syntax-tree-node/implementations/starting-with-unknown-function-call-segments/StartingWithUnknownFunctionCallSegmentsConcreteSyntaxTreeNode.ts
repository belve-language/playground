import type {StartingWithUnknownFunctionCallSegmentsConcreteSyntaxTreeNodeAtom} from "./atom/StartingWithUnknownFunctionCallSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {UnknownFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-segment/implementations/unknown/UnknownFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-segment/supported/SupportedFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class StartingWithUnknownFunctionCallSegmentsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<StartingWithUnknownFunctionCallSegmentsConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: StartingWithUnknownFunctionCallSegmentsConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly [
					UnknownFunctionCallSegmentAbstractSyntaxTreeNode,
					...(readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]),
				]
		  > {
		const unknownFunctionCallSegment = this.atom.leftSubAtom.node;
		const optionalStartingWithUnknownFunctionCallSegmentsRest =
			this.atom.rightSubAtom.node;
		const unknownFunctionCallSegmentAbstractifyingResult =
			unknownFunctionCallSegment.abstractify();
		switch (unknownFunctionCallSegmentAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const startingWithUnknownFunctionCallSegmentsAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						unknownFunctionCallSegmentAbstractifyingResult.message,
					);
				return startingWithUnknownFunctionCallSegmentsAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedUnknownFunctionCallSegment =
					unknownFunctionCallSegmentAbstractifyingResult.data;
				const optionalStartingWithUnknownFunctionCallSegmentsRestAbstractifyingResult =
					optionalStartingWithUnknownFunctionCallSegmentsRest.abstractify();
				switch (
					optionalStartingWithUnknownFunctionCallSegmentsRestAbstractifyingResult.typeName
				) {
					case errorAbstractifyingResultTypeName: {
						const startingWithUnknownFunctionCallSegmentsAbstractifyingResult: ErrorAbstractifyingResult =
							new ErrorAbstractifyingResult(
								optionalStartingWithUnknownFunctionCallSegmentsRestAbstractifyingResult.message,
							);
						return startingWithUnknownFunctionCallSegmentsAbstractifyingResult;
					}
					case successAbstractifyingResultTypeName: {
						const abstractifiedOptionalStartingWithUnknownFunctionCallSegmentsRest =
							optionalStartingWithUnknownFunctionCallSegmentsRestAbstractifyingResult.data;
						const abstractifiedStartingWithUnknownFunctionCallSegments: readonly [
							UnknownFunctionCallSegmentAbstractSyntaxTreeNode,
							...(readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]),
						] = [
							abstractifiedUnknownFunctionCallSegment,
							...abstractifiedOptionalStartingWithUnknownFunctionCallSegmentsRest,
						];
						const startingWithUnknownFunctionCallSegmentsAbstractifyingResult: SuccessAbstractifyingResult<
							readonly [
								UnknownFunctionCallSegmentAbstractSyntaxTreeNode,
								...(readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]),
							]
						> = new SuccessAbstractifyingResult(
							abstractifiedStartingWithUnknownFunctionCallSegments,
						);
						return startingWithUnknownFunctionCallSegmentsAbstractifyingResult;
					}
				}
			}
		}
	}
}
