import type {OptionalStartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom} from "./atom/OptionalStartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-segment/supported/SupportedFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class OptionalStartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalStartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: OptionalStartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<readonly []>
		| SuccessAbstractifyingResult<
				readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]
		  > {
		const startingWithUnknownFunctionCallSegmentsRest = this.atom.node;
		const startingWithUnknownFunctionCallSegmentsRestAbstractifyingResult =
			startingWithUnknownFunctionCallSegmentsRest.abstractify();
		switch (
			startingWithUnknownFunctionCallSegmentsRestAbstractifyingResult.typeName
		) {
			case errorAbstractifyingResultTypeName: {
				const optionalStartingWithUnknownFunctionCallSegmentsRestAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						startingWithUnknownFunctionCallSegmentsRestAbstractifyingResult.message,
					);
				return optionalStartingWithUnknownFunctionCallSegmentsRestAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedStartingWithUnknownFunctionCallSegmentsRest =
					startingWithUnknownFunctionCallSegmentsRestAbstractifyingResult.data;
				if (abstractifiedStartingWithUnknownFunctionCallSegmentsRest === null) {
					const abstractifiedOptionalStartingWithUnknownFunctionCallSegmentsRest: readonly [] =
						[];
					const optionalStartingWithUnknownFunctionCallSegmentsRestAbstractifyingResult: SuccessAbstractifyingResult<
						readonly []
					> = new SuccessAbstractifyingResult(
						abstractifiedOptionalStartingWithUnknownFunctionCallSegmentsRest,
					);
					return optionalStartingWithUnknownFunctionCallSegmentsRestAbstractifyingResult;
				} else {
					const abstractifiedOptionalStartingWithUnknownFunctionCallSegmentsRest: readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[] =
						abstractifiedStartingWithUnknownFunctionCallSegmentsRest;
					const optionalStartingWithUnknownFunctionCallSegmentsRestAbstractifyingResult: SuccessAbstractifyingResult<
						readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]
					> = new SuccessAbstractifyingResult(
						abstractifiedOptionalStartingWithUnknownFunctionCallSegmentsRest,
					);
					return optionalStartingWithUnknownFunctionCallSegmentsRestAbstractifyingResult;
				}
			}
		}
	}
}
