import type {OptionalStartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom} from "./atom/OptionalStartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-segment/supported/SupportedFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class OptionalStartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalStartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: OptionalStartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]
		  > {
		const startingWithWordFunctionCallSegmentsRest = this.atom.node;
		const startingWithWordFunctionCallSegmentsRestAbstractifyingResult =
			startingWithWordFunctionCallSegmentsRest.abstractify();
		switch (
			startingWithWordFunctionCallSegmentsRestAbstractifyingResult.typeName
		) {
			case errorAbstractifyingResultTypeName: {
				const optionalStartingWithWordFunctionCallSegmentsRestAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						startingWithWordFunctionCallSegmentsRestAbstractifyingResult.message,
					);
				return optionalStartingWithWordFunctionCallSegmentsRestAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedFunctionCallSegments =
					startingWithWordFunctionCallSegmentsRestAbstractifyingResult.data;
				if (abstractifiedFunctionCallSegments === null) {
					const abstractifiedOptionalStartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNode: readonly [] =
						[];
					const optionalStartingWithWordFunctionCallSegmentsRestAbstractifyingResult: SuccessAbstractifyingResult<
						readonly []
					> = new SuccessAbstractifyingResult(
						abstractifiedOptionalStartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNode,
					);
					return optionalStartingWithWordFunctionCallSegmentsRestAbstractifyingResult;
				} else {
					const abstractifiedOptionalStartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNode: readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[] =
						abstractifiedFunctionCallSegments;
					const optionalStartingWithWordFunctionCallSegmentsRestAbstractifyingResult: SuccessAbstractifyingResult<
						readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]
					> = new SuccessAbstractifyingResult(
						abstractifiedOptionalStartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNode,
					);
					return optionalStartingWithWordFunctionCallSegmentsRestAbstractifyingResult;
				}
			}
		}
	}
}
