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
		const functionCallStatementSegments = this.atom.node;
		const functionCallStatementSegmentsAbstractifyingResult =
			functionCallStatementSegments.abstractify();
		switch (functionCallStatementSegmentsAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const functionCallStatementAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						functionCallStatementSegmentsAbstractifyingResult.message,
					);
				return functionCallStatementAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedFunctionCallStatementSegments =
					functionCallStatementSegmentsAbstractifyingResult.data;
				const [
					firstAbstractifiedFunctionCallStatementSegment,
					...restAbstractifiedFunctionCallStatementSegments
				] = abstractifiedFunctionCallStatementSegments;
				const lastAbstractifiedFunctionCallStatementSegment =
					restAbstractifiedFunctionCallStatementSegments[
						restAbstractifiedFunctionCallStatementSegments.length - 1
					] ?? firstAbstractifiedFunctionCallStatementSegment;
				const abstractifiedFunctionCallStatement: FunctionCallStatementAbstractSyntaxTreeNode =
					FunctionCallStatementAbstractSyntaxTreeNode.create(
						{segments: abstractifiedFunctionCallStatementSegments},
						new SpanIndexes(
							firstAbstractifiedFunctionCallStatementSegment.spanIndexes.from,
							lastAbstractifiedFunctionCallStatementSegment.spanIndexes.until,
						),
					);
				const functionCallStatementAbstractifyingResult: SuccessAbstractifyingResult<FunctionCallStatementAbstractSyntaxTreeNode> =
					new SuccessAbstractifyingResult<FunctionCallStatementAbstractSyntaxTreeNode>(
						abstractifiedFunctionCallStatement,
					);
				return functionCallStatementAbstractifyingResult;
			}
		}
	}
}
