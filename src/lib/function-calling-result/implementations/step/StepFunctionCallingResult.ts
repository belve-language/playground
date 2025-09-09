import type {StepFunctionCallingResultData} from "./data/StepFunctionCallingResultData.ts";
import {stepFunctionCallingResultTypeName} from "./type-name/stepFunctionCallingResultTypeName.ts";
import type {SupportedStatementAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/statement/supported/SupportedStatementAbstractSyntaxTreeNode.ts";
import {FunctionCallingResult} from "../../FunctionCallingResult.ts";
export class StepFunctionCallingResult extends FunctionCallingResult<
	StepFunctionCallingResultData,
	typeof stepFunctionCallingResultTypeName
> {
	public constructor(node: SupportedStatementAbstractSyntaxTreeNode) {
		super({node: node}, stepFunctionCallingResultTypeName);
	}
}
