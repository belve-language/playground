import type {AbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/AbstractSyntaxTreeNode.ts";
import type {Variables} from "../../../variables/Variables.ts";
import {FunctionCallingResult} from "../../FunctionCallingResult.ts";
import {logFunctionCallingResultTypeName} from "./type-name/logFunctionCallingResultTypeName.ts";
// export class LogFunctionCallingResult extends FunctionCallingResult<
// 	typeof logFunctionCallingResultTypeName
// > {
// 	// TODO: separate types
// 	public constructor(
// 		actionTypeName: "failure" | "step" | "success",
// 		node: AbstractSyntaxTreeNode<unknown>,
// 		variables: Variables,
// 	) {
// 		super(logFunctionCallingResultTypeName);
// 		this.actionTypeName = actionTypeName;
// 		this.node = node;
// 		this.variables = variables;
// 	}
// 	public readonly actionTypeName: "failure" | "step" | "success";
// 	public readonly node: AbstractSyntaxTreeNode<unknown>;
// 	public readonly variables: Variables;
// }
// TODO SPLIT
export abstract class LogFunctionCallingResult<
	ActionTypeName extends string,
> extends FunctionCallingResult<typeof logFunctionCallingResultTypeName> {
	public constructor(
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
export const successLogFunctionCallingResultTypeName = "success";
export class SuccessLogFunctionCallingResult extends LogFunctionCallingResult<
	typeof successLogFunctionCallingResultTypeName
> {
	public constructor(
		node: AbstractSyntaxTreeNode<unknown>,
		unknowns: Variables,
		variables: Variables,
	) {
		super(successLogFunctionCallingResultTypeName, node, variables);
		this.unknowns = unknowns;
	}
	public readonly unknowns: Variables;
}
export const failureLogFunctionCallingResultTypeName = "failure";
export class FailureLogFunctionCallingResult extends LogFunctionCallingResult<
	typeof failureLogFunctionCallingResultTypeName
> {
	public constructor(
		node: AbstractSyntaxTreeNode<unknown>,
		variables: Variables,
	) {
		super(failureLogFunctionCallingResultTypeName, node, variables);
	}
}
export const stepLogFunctionCallingResultTypeName = "step";
export class StepLogFunctionCallingResult extends LogFunctionCallingResult<
	typeof stepLogFunctionCallingResultTypeName
> {
	public constructor(
		node: AbstractSyntaxTreeNode<unknown>,
		variables: Variables,
	) {
		super(stepLogFunctionCallingResultTypeName, node, variables);
	}
}
export type SupportedLogFunctionCallingResult =
	| FailureLogFunctionCallingResult
	| StepLogFunctionCallingResult
	| SuccessLogFunctionCallingResult;
