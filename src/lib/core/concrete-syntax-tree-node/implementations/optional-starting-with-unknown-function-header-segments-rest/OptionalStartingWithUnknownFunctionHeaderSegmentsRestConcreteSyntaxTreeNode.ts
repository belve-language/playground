import type {OptionalStartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom} from "./atom/OptionalStartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-header-segment/supported/SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class OptionalStartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalStartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: OptionalStartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<readonly []>
		| SuccessAbstractifyingResult<
				readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]
		  > {
		const startingWithUnknownFunctionHeaderSegmentsRest = this.atom.node;
		const startingWithUnknownFunctionHeaderSegmentsRestAbstractifyingResult =
			startingWithUnknownFunctionHeaderSegmentsRest.abstractify();
		switch (
			startingWithUnknownFunctionHeaderSegmentsRestAbstractifyingResult.typeName
		) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedStartingWithUnknownFunctionHeaderSegmentsRest =
					startingWithUnknownFunctionHeaderSegmentsRestAbstractifyingResult.data;
				if (
					abstractifiedStartingWithUnknownFunctionHeaderSegmentsRest === null
				) {
					const abstractifiedOptionalStartingWithUnknownFunctionHeaderSegmentsRest: readonly [] =
						[];
					const optionalStartingWithUnknownFunctionHeaderSegmentsRestAbstractifyingResult: SuccessAbstractifyingResult<
						readonly []
					> = new SuccessAbstractifyingResult(
						abstractifiedOptionalStartingWithUnknownFunctionHeaderSegmentsRest,
					);
					return optionalStartingWithUnknownFunctionHeaderSegmentsRestAbstractifyingResult;
				} else {
					const abstractifiedOptionalStartingWithUnknownFunctionHeaderSegmentsRest: readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[] =
						abstractifiedStartingWithUnknownFunctionHeaderSegmentsRest;
					const optionalStartingWithUnknownFunctionHeaderSegmentsRestAbstractifyingResult: SuccessAbstractifyingResult<
						readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]
					> = new SuccessAbstractifyingResult(
						abstractifiedOptionalStartingWithUnknownFunctionHeaderSegmentsRest,
					);
					return optionalStartingWithUnknownFunctionHeaderSegmentsRestAbstractifyingResult;
				}
			}
			case errorAbstractifyingResultTypeName: {
				const abstractifiedOptionalStartingWithUnknownFunctionHeaderSegmentsRest: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						startingWithUnknownFunctionHeaderSegmentsRestAbstractifyingResult.message,
					);
				return abstractifiedOptionalStartingWithUnknownFunctionHeaderSegmentsRest;
			}
		}
	}
}
