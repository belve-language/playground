import type {OptionalFunctionCallSegmentsConcreteSyntaxTreeNodeAtom} from "./atom/OptionalFunctionCallSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-segment/supported/SupportedFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class OptionalFunctionCallSegmentsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalFunctionCallSegmentsConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: OptionalFunctionCallSegmentsConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<readonly []>
		| SuccessAbstractifyingResult<
				readonly [
					SupportedFunctionCallSegmentAbstractSyntaxTreeNode,
					...SupportedFunctionCallSegmentAbstractSyntaxTreeNode[],
				]
		  > {
		const functionCallSegments = this.atom.node;
		if (functionCallSegments === null) {
			const abstractifiedOptionalFunctionCallSegments: readonly [] = [];
			const optionalFunctionCallSegmentsAbstractifyingResult: SuccessAbstractifyingResult<
				readonly []
			> = new SuccessAbstractifyingResult<readonly []>(
				abstractifiedOptionalFunctionCallSegments,
			);
			return optionalFunctionCallSegmentsAbstractifyingResult;
		} else {
			const functionCallSegmentsAbstractifyingResult =
				functionCallSegments.abstractify();
			switch (functionCallSegmentsAbstractifyingResult.typeName) {
				case errorAbstractifyingResultTypeName: {
					const optionalFunctionCallSegmentsAbstractifyingResult: ErrorAbstractifyingResult =
						new ErrorAbstractifyingResult(
							functionCallSegmentsAbstractifyingResult.message,
						);
					return optionalFunctionCallSegmentsAbstractifyingResult;
				}
				case successAbstractifyingResultTypeName: {
					const abstractifiedFunctionCallSegments =
						functionCallSegmentsAbstractifyingResult.data;
					if (abstractifiedFunctionCallSegments === null) {
						const abstractifiedOptionalFunctionCallSegments: readonly [] = [];
						const optionalFunctionCallSegmentsAbstractifyingResult: SuccessAbstractifyingResult<
							readonly []
						> = new SuccessAbstractifyingResult<readonly []>(
							abstractifiedOptionalFunctionCallSegments,
						);
						return optionalFunctionCallSegmentsAbstractifyingResult;
					} else {
						const abstractifiedOptionalFunctionCallSegments: readonly [
							SupportedFunctionCallSegmentAbstractSyntaxTreeNode,
							...SupportedFunctionCallSegmentAbstractSyntaxTreeNode[],
						] = abstractifiedFunctionCallSegments;
						const optionalFunctionCallSegmentsAbstractifyingResult: SuccessAbstractifyingResult<
							readonly [
								SupportedFunctionCallSegmentAbstractSyntaxTreeNode,
								...SupportedFunctionCallSegmentAbstractSyntaxTreeNode[],
							]
						> = new SuccessAbstractifyingResult<
							readonly [
								SupportedFunctionCallSegmentAbstractSyntaxTreeNode,
								...SupportedFunctionCallSegmentAbstractSyntaxTreeNode[],
							]
						>(abstractifiedOptionalFunctionCallSegments);
						return optionalFunctionCallSegmentsAbstractifyingResult;
					}
				}
			}
		}
	}
}
