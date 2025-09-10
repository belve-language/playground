import type {OptionalStartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom} from "./atom/OptionalStartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-header-segment/supported/SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class OptionalStartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalStartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: OptionalStartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]
		  > {
		const startingWithKnownFunctionHeaderSegmentsRest = this.atom.node;
		const startingWithKnownFunctionHeaderSegmentsRestAbstractifyingResult =
			startingWithKnownFunctionHeaderSegmentsRest.abstractify();
		switch (
			startingWithKnownFunctionHeaderSegmentsRestAbstractifyingResult.typeName
		) {
			case errorAbstractifyingResultTypeName: {
				const optionalStartingWithKnownFunctionHeaderSegmentsRestAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						startingWithKnownFunctionHeaderSegmentsRestAbstractifyingResult.message,
					);
				return optionalStartingWithKnownFunctionHeaderSegmentsRestAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedStartingWithKnownFunctionHeaderSegmentsRest =
					startingWithKnownFunctionHeaderSegmentsRestAbstractifyingResult.data;
				if (abstractifiedStartingWithKnownFunctionHeaderSegmentsRest === null) {
					const abstractifiedOptionalStartingWithKnownFunctionHeaderSegmentsRest: readonly [] =
						[];
					const optionalStartingWithKnownFunctionHeaderSegmentsRestAbstractifyingResult: SuccessAbstractifyingResult<
						readonly []
					> = new SuccessAbstractifyingResult(
						abstractifiedOptionalStartingWithKnownFunctionHeaderSegmentsRest,
					);
					return optionalStartingWithKnownFunctionHeaderSegmentsRestAbstractifyingResult;
				} else {
					const abstractifiedOptionalStartingWithKnownFunctionHeaderSegmentsRest: readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[] =
						abstractifiedStartingWithKnownFunctionHeaderSegmentsRest;
					const optionalStartingWithKnownFunctionHeaderSegmentsRestAbstractifyingResult: SuccessAbstractifyingResult<
						readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]
					> = new SuccessAbstractifyingResult(
						abstractifiedOptionalStartingWithKnownFunctionHeaderSegmentsRest,
					);
					return optionalStartingWithKnownFunctionHeaderSegmentsRestAbstractifyingResult;
				}
			}
		}
	}
}
