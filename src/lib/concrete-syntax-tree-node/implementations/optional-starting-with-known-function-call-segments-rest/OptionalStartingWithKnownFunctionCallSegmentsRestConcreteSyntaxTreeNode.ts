import type {OptionalStartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom} from "./atom/OptionalStartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-segment/supported/SupportedFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class OptionalStartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalStartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: OptionalStartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]
		  > {
		const startingWithKnownFunctionCallSegmentsRest = this.atom.node;
		const startingWithKnownFunctionCallSegmentsRestAbstractifyingResult =
			startingWithKnownFunctionCallSegmentsRest.abstractify();
		switch (
			startingWithKnownFunctionCallSegmentsRestAbstractifyingResult.typeName
		) {
			case errorAbstractifyingResultTypeName: {
				const optionalStartingWithKnownFunctionCallSegmentsRestAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						startingWithKnownFunctionCallSegmentsRestAbstractifyingResult.message,
					);
				return optionalStartingWithKnownFunctionCallSegmentsRestAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedStartingWithKnownFunctionCallSegmentsRest =
					startingWithKnownFunctionCallSegmentsRestAbstractifyingResult.data;
				if (abstractifiedStartingWithKnownFunctionCallSegmentsRest === null) {
					const abstractifiedOptionalStartingWithKnownFunctionCallSegmentsRest: readonly [] =
						[];
					const optionalStartingWithKnownFunctionCallSegmentsRestAbstractifyingResult: SuccessAbstractifyingResult<
						readonly []
					> = new SuccessAbstractifyingResult(
						abstractifiedOptionalStartingWithKnownFunctionCallSegmentsRest,
					);
					return optionalStartingWithKnownFunctionCallSegmentsRestAbstractifyingResult;
				} else {
					const abstractifiedOptionalStartingWithKnownFunctionCallSegmentsRest: readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[] =
						abstractifiedStartingWithKnownFunctionCallSegmentsRest;
					const optionalStartingWithKnownFunctionCallSegmentsRestAbstractifyingResult: SuccessAbstractifyingResult<
						readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]
					> = new SuccessAbstractifyingResult(
						abstractifiedOptionalStartingWithKnownFunctionCallSegmentsRest,
					);
					return optionalStartingWithKnownFunctionCallSegmentsRestAbstractifyingResult;
				}
			}
		}
	}
}
