import type {OptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom} from "./atom/OptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-statement-segment/supported/SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class OptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: OptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<readonly []>
		| SuccessAbstractifyingResult<
				readonly [
					SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode,
					...SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[],
				]
		  > {
		const functionCallStatementSegments = this.atom.node;
		const functionCallStatementSegmentsAbstractifyingResult =
			functionCallStatementSegments.abstractify();
		switch (functionCallStatementSegmentsAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const optionalFunctionCallStatementSegmentsAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						functionCallStatementSegmentsAbstractifyingResult.message,
					);
				return optionalFunctionCallStatementSegmentsAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedFunctionCallStatementSegments =
					functionCallStatementSegmentsAbstractifyingResult.data;
				if (abstractifiedFunctionCallStatementSegments === null) {
					const abstractifiedOptionalFunctionCallStatementSegments: readonly [] =
						[];
					const optionalFunctionCallStatementSegmentsAbstractifyingResult: SuccessAbstractifyingResult<
						readonly []
					> = new SuccessAbstractifyingResult<readonly []>(
						abstractifiedOptionalFunctionCallStatementSegments,
					);
					return optionalFunctionCallStatementSegmentsAbstractifyingResult;
				} else {
					const abstractifiedOptionalFunctionCallStatementSegments: readonly [
						SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode,
						...SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[],
					] = abstractifiedFunctionCallStatementSegments;
					const optionalFunctionCallStatementSegmentsAbstractifyingResult: SuccessAbstractifyingResult<
						readonly [
							SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode,
							...SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[],
						]
					> = new SuccessAbstractifyingResult<
						readonly [
							SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode,
							...SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[],
						]
					>(abstractifiedOptionalFunctionCallStatementSegments);
					return optionalFunctionCallStatementSegmentsAbstractifyingResult;
				}
			}
		}
	}
}
