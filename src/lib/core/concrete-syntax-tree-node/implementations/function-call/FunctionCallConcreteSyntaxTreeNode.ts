import type {FunctionCallConcreteSyntaxTreeNodeAtom} from "./atom/FunctionCallConcreteSyntaxTreeNodeAtom.ts";
import {FunctionCallStatementAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/statement/implementations/function-call/FunctionCallStatementAbstractSyntaxTreeNode.ts";
import {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class FunctionCallConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<FunctionCallConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: FunctionCallConcreteSyntaxTreeNodeAtom) {
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
				const functionCallAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						functionCallSegmentsAbstractifyingResult.message,
					);
				return functionCallAbstractifyingResult;
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
				const functionCallAbstractifyingResult: SuccessAbstractifyingResult<FunctionCallStatementAbstractSyntaxTreeNode> =
					new SuccessAbstractifyingResult(abstractifiedFunctionCall);
				return functionCallAbstractifyingResult;
			}
		}
	}
}
