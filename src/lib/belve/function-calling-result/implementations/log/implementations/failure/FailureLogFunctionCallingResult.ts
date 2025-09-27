import type {AbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/AbstractSyntaxTreeNode.ts";
import type {Variables} from "../../../../../variables/Variables.ts";
import {LogFunctionCallingResult} from "../../LogFunctionCallingResult.ts";
import {failureLogFunctionCallingResultActionTypeName} from "./action-type-name/failureLogFunctionCallingResultActionTypeName.ts";
export class FailureLogFunctionCallingResult extends LogFunctionCallingResult<
	typeof failureLogFunctionCallingResultActionTypeName
> {
	public constructor(
		availables: Variables,
		node: AbstractSyntaxTreeNode<unknown>,
	) {
		super(failureLogFunctionCallingResultActionTypeName, availables, node);
	}
}
