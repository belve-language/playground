import type {AbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/AbstractSyntaxTreeNode.ts";
import type {Variables} from "../../../../../variables/Variables.ts";
import {LogFunctionCallingResult} from "../../LogFunctionCallingResult.ts";
import {stepLogFunctionCallingResultActionTypeName} from "./action-type-name/stepLogFunctionCallingResultActionTypeName.ts";
export class StepLogFunctionCallingResult extends LogFunctionCallingResult<
	typeof stepLogFunctionCallingResultActionTypeName
> {
	public constructor(
		node: AbstractSyntaxTreeNode<unknown>,
		variables: Variables,
	) {
		super(stepLogFunctionCallingResultActionTypeName, node, variables);
	}
}
