import type {SuccessFunctionCallingResultData} from "./data/SuccessFunctionCallingResultData.ts";
import {successFunctionCallingResultTypeName} from "./type-name/successFunctionCallingResultTypeName.ts";
import type {SupportedStatementAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/statement/supported/SupportedStatementAbstractSyntaxTreeNode.ts";
import type {Variables} from "../../../variables/Variables.ts";
import {FunctionCallingResult} from "../../FunctionCallingResult.ts";
export class SuccessFunctionCallingResult extends FunctionCallingResult<
	SuccessFunctionCallingResultData,
	typeof successFunctionCallingResultTypeName
> {
	public constructor(
		node: SupportedStatementAbstractSyntaxTreeNode,
		variables: Variables,
	) {
		super(
			{node: node, variables: variables},
			successFunctionCallingResultTypeName,
		);
	}
}
