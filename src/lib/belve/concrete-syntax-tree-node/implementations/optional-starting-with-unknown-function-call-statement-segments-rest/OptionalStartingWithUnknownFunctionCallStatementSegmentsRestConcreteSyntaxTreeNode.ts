import type {OptionalStartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom} from "./atom/OptionalStartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-statement-segment/supported/SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class OptionalStartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalStartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: OptionalStartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<readonly []>
		| SuccessAbstractifyingResult<
				readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]
		  > {
		const startingWithUnknownFunctionCallStatementSegmentsRest = this.atom.node;
		const startingWithUnknownFunctionCallStatementSegmentsRestAbstractifyingResult =
			startingWithUnknownFunctionCallStatementSegmentsRest.abstractify();
		switch (
			startingWithUnknownFunctionCallStatementSegmentsRestAbstractifyingResult.typeName
		) {
			case errorAbstractifyingResultTypeName: {
				const optionalStartingWithUnknownFunctionCallStatementSegmentsRestAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						startingWithUnknownFunctionCallStatementSegmentsRestAbstractifyingResult.message,
					);
				return optionalStartingWithUnknownFunctionCallStatementSegmentsRestAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedStartingWithUnknownFunctionCallStatementSegmentsRest =
					startingWithUnknownFunctionCallStatementSegmentsRestAbstractifyingResult.data;
				if (
					abstractifiedStartingWithUnknownFunctionCallStatementSegmentsRest
					=== null
				) {
					const abstractifiedOptionalStartingWithUnknownFunctionCallStatementSegmentsRest: readonly [] =
						[];
					const optionalStartingWithUnknownFunctionCallStatementSegmentsRestAbstractifyingResult: SuccessAbstractifyingResult<
						readonly []
					> = new SuccessAbstractifyingResult<readonly []>(
						abstractifiedOptionalStartingWithUnknownFunctionCallStatementSegmentsRest,
					);
					return optionalStartingWithUnknownFunctionCallStatementSegmentsRestAbstractifyingResult;
				} else {
					const abstractifiedOptionalStartingWithUnknownFunctionCallStatementSegmentsRest: readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[] =
						abstractifiedStartingWithUnknownFunctionCallStatementSegmentsRest;
					const optionalStartingWithUnknownFunctionCallStatementSegmentsRestAbstractifyingResult: SuccessAbstractifyingResult<
						readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]
					> = new SuccessAbstractifyingResult<
						readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]
					>(
						abstractifiedOptionalStartingWithUnknownFunctionCallStatementSegmentsRest,
					);
					return optionalStartingWithUnknownFunctionCallStatementSegmentsRestAbstractifyingResult;
				}
			}
		}
	}
}
