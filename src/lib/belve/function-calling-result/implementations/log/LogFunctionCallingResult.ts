import type {AbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/AbstractSyntaxTreeNode.ts";
import type {Variables} from "../../../variables/Variables.ts";
import {FunctionCallingResult} from "../../FunctionCallingResult.ts";
import {logFunctionCallingResultTypeName} from "./type-name/logFunctionCallingResultTypeName.ts";
export abstract class LogFunctionCallingResult<
	ActionTypeName extends string,
> extends FunctionCallingResult<typeof logFunctionCallingResultTypeName> {
	protected constructor(
		actionTypeName: ActionTypeName,
		availables: Variables,
		node: AbstractSyntaxTreeNode<unknown>,
	) {
		super(logFunctionCallingResultTypeName);
		this.actionTypeName = actionTypeName;
		this.availables = availables;
		this.node = node;
	}
	public readonly actionTypeName: ActionTypeName;
	public readonly availables: Variables;
	public readonly node: AbstractSyntaxTreeNode<unknown>;
}
