import type {FailureFunctionCallingResultData} from "./data/FailureFunctionCallingResultData.ts";
import {failureFunctionCallingResultTypeName} from "./type-name/failureFunctionCallingResultTypeName.ts";
import type {SupportedStatementAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/statement/supported/SupportedStatementAbstractSyntaxTreeNode.ts";
import {FunctionCallingResult} from "../../FunctionCallingResult.ts";
export class FailureFunctionCallingResult extends FunctionCallingResult<
	FailureFunctionCallingResultData,
	typeof failureFunctionCallingResultTypeName
> {
	public constructor(node: SupportedStatementAbstractSyntaxTreeNode) {
		super({node: node}, failureFunctionCallingResultTypeName);
	}
}
