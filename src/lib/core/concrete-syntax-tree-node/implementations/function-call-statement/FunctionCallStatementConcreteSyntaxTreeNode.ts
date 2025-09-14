import type {FunctionCallStatementConcreteSyntaxTreeNodeAtom} from "./atom/FunctionCallStatementConcreteSyntaxTreeNodeAtom.ts";
import {FunctionCallStatementAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/statement/implementations/function-call/FunctionCallStatementAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class FunctionCallStatementConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<FunctionCallStatementConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: FunctionCallStatementConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<FunctionCallStatementAbstractSyntaxTreeNode> {
		const functionCallSegments = this.atom.node;
		const functionCallSegmentsAbstractifyingResult =
			functionCallSegments.abstractify();
		switch (functionCallSegmentsAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const functionCallStatementAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						functionCallSegmentsAbstractifyingResult.message,
					);
				return functionCallStatementAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedFunctionCallSegments =
					functionCallSegmentsAbstractifyingResult.data;
				const [
					firstAbstractifiedFunctionCallSegment,
					...restAbstractifiedFunctionCallSegments
				] = abstractifiedFunctionCallSegments;
				const lastAbstractifiedFunctionCallSegment =
					restAbstractifiedFunctionCallSegments[
						restAbstractifiedFunctionCallSegments.length - 1
					] ?? firstAbstractifiedFunctionCallSegment;
				const abstractifiedFunctionCall: FunctionCallStatementAbstractSyntaxTreeNode =
					FunctionCallStatementAbstractSyntaxTreeNode.create(
						{segments: abstractifiedFunctionCallSegments},
						new SpanIndexes(
							firstAbstractifiedFunctionCallSegment.spanIndexes.from,
							lastAbstractifiedFunctionCallSegment.spanIndexes.until,
						),
					);
				const functionCallStatementAbstractifyingResult: SuccessAbstractifyingResult<FunctionCallStatementAbstractSyntaxTreeNode> =
					new SuccessAbstractifyingResult(abstractifiedFunctionCall);
				return functionCallStatementAbstractifyingResult;
			}
		}
	}
}
