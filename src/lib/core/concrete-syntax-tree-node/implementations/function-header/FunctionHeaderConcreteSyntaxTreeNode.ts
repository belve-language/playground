import type {FunctionHeaderConcreteSyntaxTreeNodeAtom} from "./atom/FunctionHeaderConcreteSyntaxTreeNodeAtom.ts";
import {FunctionHeaderAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class FunctionHeaderConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<FunctionHeaderConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: FunctionHeaderConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<FunctionHeaderAbstractSyntaxTreeNode> {
		const functionHeaderSegments = this.atom.node;
		const functionHeaderSegmentsAbstractifyingResult =
			functionHeaderSegments.abstractify();
		switch (functionHeaderSegmentsAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const functionHeaderAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						functionHeaderSegmentsAbstractifyingResult.message,
					);
				return functionHeaderAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedFunctionHeaderSegments =
					functionHeaderSegmentsAbstractifyingResult.data;
				const [
					firstAbstractifiedFunctionHeaderSegment,
					...restAbstractifiedFunctionHeaderSegments
				] = abstractifiedFunctionHeaderSegments;
				const lastAbstractifiedFunctionHeaderSegment =
					restAbstractifiedFunctionHeaderSegments[
						restAbstractifiedFunctionHeaderSegments.length - 1
					] ?? firstAbstractifiedFunctionHeaderSegment;
				const abstractifiedFunctionHeaderSpanIndexes: SpanIndexes =
					new SpanIndexes(
						firstAbstractifiedFunctionHeaderSegment.spanIndexes.from,
						lastAbstractifiedFunctionHeaderSegment.spanIndexes.until,
					);
				const abstractifiedFunctionHeader: FunctionHeaderAbstractSyntaxTreeNode =
					FunctionHeaderAbstractSyntaxTreeNode.create(
						{segments: abstractifiedFunctionHeaderSegments},
						abstractifiedFunctionHeaderSpanIndexes,
					);
				const functionHeaderAbstractifyingResult: SuccessAbstractifyingResult<FunctionHeaderAbstractSyntaxTreeNode> =
					new SuccessAbstractifyingResult<FunctionHeaderAbstractSyntaxTreeNode>(
						abstractifiedFunctionHeader,
					);
				return functionHeaderAbstractifyingResult;
			}
		}
	}
}
