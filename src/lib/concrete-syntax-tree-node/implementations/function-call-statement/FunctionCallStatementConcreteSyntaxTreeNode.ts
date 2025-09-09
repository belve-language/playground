import type {FunctionCallStatementConcreteSyntaxTreeNodeAtom} from "./atom/FunctionCallStatementConcreteSyntaxTreeNodeAtom.ts";
import type {FunctionCallStatementAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/statement/implementations/function-call/FunctionCallAbstractSyntaxTreeNode.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class FunctionCallStatementConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<FunctionCallStatementConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: FunctionCallStatementConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<FunctionCallStatementAbstractSyntaxTreeNode> {
		const functionCall = this.atom.node;
		const abstractifiedFunctionCall = functionCall.abstractify();
		const functionCallAbstractifyingResult = abstractifiedFunctionCall;
		switch (functionCallAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const functionCallStatementAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						functionCallAbstractifyingResult.message,
					);
				return functionCallStatementAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedFunctionCallStatement =
					functionCallAbstractifyingResult.data;
				const functionCallStatementAbstractifyingResult: SuccessAbstractifyingResult<FunctionCallStatementAbstractSyntaxTreeNode> =
					new SuccessAbstractifyingResult<FunctionCallStatementAbstractSyntaxTreeNode>(
						abstractifiedFunctionCallStatement,
					);
				return functionCallStatementAbstractifyingResult;
			}
		}
	}
}
