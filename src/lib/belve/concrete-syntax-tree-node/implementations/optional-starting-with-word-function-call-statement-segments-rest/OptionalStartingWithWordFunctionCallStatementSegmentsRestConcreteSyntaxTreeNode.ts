import type {OptionalStartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom} from "./atom/OptionalStartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-statement-segment/supported/SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class OptionalStartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalStartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: OptionalStartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]
		  > {
		const startingWithWordFunctionCallStatementSegmentsRest = this.atom.node;
		const startingWithWordFunctionCallStatementSegmentsRestAbstractifyingResult =
			startingWithWordFunctionCallStatementSegmentsRest.abstractify();
		switch (
			startingWithWordFunctionCallStatementSegmentsRestAbstractifyingResult.typeName
		) {
			case errorAbstractifyingResultTypeName: {
				const optionalStartingWithWordFunctionCallStatementSegmentsRestAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						startingWithWordFunctionCallStatementSegmentsRestAbstractifyingResult.message,
					);
				return optionalStartingWithWordFunctionCallStatementSegmentsRestAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedFunctionCallStatementSegments =
					startingWithWordFunctionCallStatementSegmentsRestAbstractifyingResult.data;
				if (abstractifiedFunctionCallStatementSegments === null) {
					const abstractifiedOptionalStartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode: readonly [] =
						[];
					const optionalStartingWithWordFunctionCallStatementSegmentsRestAbstractifyingResult: SuccessAbstractifyingResult<
						readonly []
					> = new SuccessAbstractifyingResult(
						abstractifiedOptionalStartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode,
					);
					return optionalStartingWithWordFunctionCallStatementSegmentsRestAbstractifyingResult;
				} else {
					const abstractifiedOptionalStartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode: readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[] =
						abstractifiedFunctionCallStatementSegments;
					const optionalStartingWithWordFunctionCallStatementSegmentsRestAbstractifyingResult: SuccessAbstractifyingResult<
						readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]
					> = new SuccessAbstractifyingResult(
						abstractifiedOptionalStartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode,
					);
					return optionalStartingWithWordFunctionCallStatementSegmentsRestAbstractifyingResult;
				}
			}
		}
	}
}
