import type {OptionalStartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom} from "./atom/OptionalStartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-statement-segment/supported/SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class OptionalStartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalStartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: OptionalStartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]
		  > {
		const startingWithKnownFunctionCallStatementSegmentsRest = this.atom.node;
		const startingWithKnownFunctionCallStatementSegmentsRestAbstractifyingResult =
			startingWithKnownFunctionCallStatementSegmentsRest.abstractify();
		switch (
			startingWithKnownFunctionCallStatementSegmentsRestAbstractifyingResult.typeName
		) {
			case errorAbstractifyingResultTypeName: {
				const optionalStartingWithKnownFunctionCallStatementSegmentsRestAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						startingWithKnownFunctionCallStatementSegmentsRestAbstractifyingResult.message,
					);
				return optionalStartingWithKnownFunctionCallStatementSegmentsRestAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedStartingWithKnownFunctionCallStatementSegmentsRest =
					startingWithKnownFunctionCallStatementSegmentsRestAbstractifyingResult.data;
				if (
					abstractifiedStartingWithKnownFunctionCallStatementSegmentsRest
					=== null
				) {
					const abstractifiedOptionalStartingWithKnownFunctionCallStatementSegmentsRest: readonly [] =
						[];
					const optionalStartingWithKnownFunctionCallStatementSegmentsRestAbstractifyingResult: SuccessAbstractifyingResult<
						readonly []
					> = new SuccessAbstractifyingResult<readonly []>(
						abstractifiedOptionalStartingWithKnownFunctionCallStatementSegmentsRest,
					);
					return optionalStartingWithKnownFunctionCallStatementSegmentsRestAbstractifyingResult;
				} else {
					const abstractifiedOptionalStartingWithKnownFunctionCallStatementSegmentsRest: readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[] =
						abstractifiedStartingWithKnownFunctionCallStatementSegmentsRest;
					const optionalStartingWithKnownFunctionCallStatementSegmentsRestAbstractifyingResult: SuccessAbstractifyingResult<
						readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]
					> = new SuccessAbstractifyingResult<
						readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]
					>(
						abstractifiedOptionalStartingWithKnownFunctionCallStatementSegmentsRest,
					);
					return optionalStartingWithKnownFunctionCallStatementSegmentsRestAbstractifyingResult;
				}
			}
		}
	}
}
