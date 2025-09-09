import type {StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom} from "./atom/StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-header-segment/implementations/unknown/UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-header-segment/supported/SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly [
					UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode,
					...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
				]
		  > {
		const unknownFunctionHeaderSegment = this.atom.leftSubAtom.node;
		const optionalStartingWithUnknownFunctionHeaderSegmentsRest =
			this.atom.rightSubAtom.node;
		const unknownFunctionHeaderSegmentAbstractifyingResult =
			unknownFunctionHeaderSegment.abstractify();
		switch (unknownFunctionHeaderSegmentAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const startingWithUnknownFunctionHeaderSegmentsAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						unknownFunctionHeaderSegmentAbstractifyingResult.message,
					);
				return startingWithUnknownFunctionHeaderSegmentsAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedUnknownFunctionHeaderSegment =
					unknownFunctionHeaderSegmentAbstractifyingResult.data;
				const optionalStartingWithUnknownFunctionHeaderSegmentsRestAbstractifyingResult =
					optionalStartingWithUnknownFunctionHeaderSegmentsRest.abstractify();
				switch (
					optionalStartingWithUnknownFunctionHeaderSegmentsRestAbstractifyingResult.typeName
				) {
					case errorAbstractifyingResultTypeName: {
						const startingWithUnknownFunctionHeaderSegmentsAbstractifyingResult: ErrorAbstractifyingResult =
							new ErrorAbstractifyingResult(
								optionalStartingWithUnknownFunctionHeaderSegmentsRestAbstractifyingResult.message,
							);
						return startingWithUnknownFunctionHeaderSegmentsAbstractifyingResult;
					}
					case successAbstractifyingResultTypeName: {
						const abstractifiedOptionalStartingWithUnknownFunctionHeaderSegmentsRest =
							optionalStartingWithUnknownFunctionHeaderSegmentsRestAbstractifyingResult.data;
						const abstractifiedStartingWithUnknownFunctionHeaderSegments: readonly [
							UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode,
							...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
						] = [
							abstractifiedUnknownFunctionHeaderSegment,
							...abstractifiedOptionalStartingWithUnknownFunctionHeaderSegmentsRest,
						];
						const startingWithUnknownFunctionHeaderSegmentsAbstractifyingResult: SuccessAbstractifyingResult<
							readonly [
								UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode,
								...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
							]
						> = new SuccessAbstractifyingResult<
							readonly [
								UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode,
								...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
							]
						>(abstractifiedStartingWithUnknownFunctionHeaderSegments);
						return startingWithUnknownFunctionHeaderSegmentsAbstractifyingResult;
					}
				}
			}
		}
	}
}
