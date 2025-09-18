import type {AbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/AbstractSyntaxTreeNode.ts";
import type {Variables} from "../../../variables/Variables.ts";
import {FunctionCallingResult} from "../../FunctionCallingResult.ts";
import {logFunctionCallingResultTypeName} from "./type-name/logFunctionCallingResultTypeName.ts";
export abstract class LogFunctionCallingResult<
	ActionTypeName extends string,
> extends FunctionCallingResult<typeof logFunctionCallingResultTypeName> {
	protected constructor(
		actionTypeName: ActionTypeName,
		node: AbstractSyntaxTreeNode<unknown>,
		variables: Variables,
	) {
		super(logFunctionCallingResultTypeName);
		this.actionTypeName = actionTypeName;
		this.node = node;
		this.variables = variables;
	}
	public readonly actionTypeName: ActionTypeName;
	public readonly node: AbstractSyntaxTreeNode<unknown>;
	public readonly variables: Variables;
}
