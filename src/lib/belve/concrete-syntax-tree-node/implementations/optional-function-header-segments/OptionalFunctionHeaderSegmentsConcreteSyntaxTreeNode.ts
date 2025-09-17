import type {OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom} from "./atom/OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-header-segment/supported/SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<readonly []>
		| SuccessAbstractifyingResult<
				readonly [
					SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode,
					...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
				]
		  > {
		const functionHeaderSegments = this.atom.node;
		const functionHeaderSegmentsAbstractifyingResult =
			functionHeaderSegments.abstractify();
		switch (functionHeaderSegmentsAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const errorAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						functionHeaderSegmentsAbstractifyingResult.message,
					);
				return errorAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedFunctionHeaderSegments =
					functionHeaderSegmentsAbstractifyingResult.data;
				if (abstractifiedFunctionHeaderSegments === null) {
					const abstractifiedOptionalFunctionHeaderSegments: readonly [] = [];
					const optionalFunctionHeaderAbstractifyingResult: SuccessAbstractifyingResult<
						readonly []
					> = new SuccessAbstractifyingResult(
						abstractifiedOptionalFunctionHeaderSegments,
					);
					return optionalFunctionHeaderAbstractifyingResult;
				} else {
					const abstractifiedOptionalFunctionHeaderSegments: readonly [
						SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode,
						...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
					] = abstractifiedFunctionHeaderSegments;
					const optionalFunctionHeaderAbstractifyingResult: SuccessAbstractifyingResult<
						readonly [
							SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode,
							...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
						]
					> = new SuccessAbstractifyingResult(
						abstractifiedOptionalFunctionHeaderSegments,
					);
					return optionalFunctionHeaderAbstractifyingResult;
				}
			}
		}
	}
}
