import type {OptionalStartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom} from "./atom/OptionalStartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-header-segment/supported/SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class OptionalStartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalStartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: OptionalStartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]
		  > {
		const startingWithWordFunctionHeaderSegmentsRest = this.atom.node;
		const startingWithWordFunctionHeaderSegmentsRestAbstractifyingResult =
			startingWithWordFunctionHeaderSegmentsRest.abstractify();
		switch (
			startingWithWordFunctionHeaderSegmentsRestAbstractifyingResult.typeName
		) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedStartingWithWordFunctionHeaderSegmentsRest =
					startingWithWordFunctionHeaderSegmentsRestAbstractifyingResult.data;
				if (abstractifiedStartingWithWordFunctionHeaderSegmentsRest === null) {
					const abstractifiedOptionalStartingWithWordFunctionHeaderSegmentsRest: readonly [] =
						[];
					const optionalStartingWithWordFunctionHeaderSegmentsRestAbstractifyingResult: SuccessAbstractifyingResult<
						readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]
					> = new SuccessAbstractifyingResult(
						abstractifiedOptionalStartingWithWordFunctionHeaderSegmentsRest,
					);
					return optionalStartingWithWordFunctionHeaderSegmentsRestAbstractifyingResult;
				} else {
					const abstractifiedOptionalStartingWithWordFunctionHeaderSegmentsRest: readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[] =
						abstractifiedStartingWithWordFunctionHeaderSegmentsRest;
					const optionalStartingWithWordFunctionHeaderSegmentsRestAbstractifyingResult: SuccessAbstractifyingResult<
						readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]
					> = new SuccessAbstractifyingResult(
						abstractifiedOptionalStartingWithWordFunctionHeaderSegmentsRest,
					);
					return optionalStartingWithWordFunctionHeaderSegmentsRestAbstractifyingResult;
				}
			}
			case errorAbstractifyingResultTypeName: {
				const optionalStartingWithWordFunctionHeaderSegmentsRestAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						startingWithWordFunctionHeaderSegmentsRestAbstractifyingResult.message,
					);
				return optionalStartingWithWordFunctionHeaderSegmentsRestAbstractifyingResult;
			}
		}
	}
}
