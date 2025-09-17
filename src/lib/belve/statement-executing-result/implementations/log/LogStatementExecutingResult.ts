import {logStatementExecutingResultTypeName} from "./type-name/logStatementExecutingResultTypeName.ts";
import type {AbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/AbstractSyntaxTreeNode.ts";
import type {Variables} from "../../../variables/Variables.ts";
import {StatementExecutingResult} from "../../StatementExecutingResult.ts";
// export class LogStatementExecutingResult extends StatementExecutingResult<
// 	typeof logStatementExecutingResultTypeName
// > {
// 	public constructor(
// 		actionTypeName: "failure" | "step" | "success",
// 		node: AbstractSyntaxTreeNode<unknown>,
// 		variables: Variables,
// 	) {
// 		super(logStatementExecutingResultTypeName);
// 		this.actionTypeName = actionTypeName;
// 		this.node = node;
// 		this.variables = variables;
// 	}
// 	public readonly actionTypeName: "failure" | "step" | "success";
// 	public readonly node: AbstractSyntaxTreeNode<unknown>;
// 	public readonly variables: Variables;
// }

// TODO split
export abstract class LogStatementExecutingResult<
	ActionTypeName extends string,
> extends StatementExecutingResult<typeof logStatementExecutingResultTypeName> {
	public constructor(
		actionTypeName: ActionTypeName,
		node: AbstractSyntaxTreeNode<unknown>,
		variables: Variables,
	) {
		super(logStatementExecutingResultTypeName);
		this.actionTypeName = actionTypeName;
		this.node = node;
		this.variables = variables;
	}
	public readonly actionTypeName: ActionTypeName;
	public readonly node: AbstractSyntaxTreeNode<unknown>;
	public readonly variables: Variables;
}
export const successLogStatementExecutingResultTypeName = "success";
export class SuccessLogStatementExecutingResult extends LogStatementExecutingResult<
	typeof successLogStatementExecutingResultTypeName
> {
	public constructor(
		node: AbstractSyntaxTreeNode<unknown>,
		unknowns: Variables,
		variables: Variables,
	) {
		super(successLogStatementExecutingResultTypeName, node, variables);
		this.unknowns = unknowns;
	}
	public readonly unknowns: Variables;
}
export const failureLogStatementExecutingResultTypeName = "failure";
export class FailureLogStatementExecutingResult extends LogStatementExecutingResult<
	typeof failureLogStatementExecutingResultTypeName
> {
	public constructor(
		node: AbstractSyntaxTreeNode<unknown>,
		variables: Variables,
	) {
		super(failureLogStatementExecutingResultTypeName, node, variables);
	}
}
export const stepLogStatementExecutingResultTypeName = "step";
export class StepLogStatementExecutingResult extends LogStatementExecutingResult<
	typeof stepLogStatementExecutingResultTypeName
> {
	public constructor(
		node: AbstractSyntaxTreeNode<unknown>,
		variables: Variables,
	) {
		super(stepLogStatementExecutingResultTypeName, node, variables);
	}
}
export type SupportedLogStatementExecutingResult =
	| FailureLogStatementExecutingResult
	| StepLogStatementExecutingResult
	| SuccessLogStatementExecutingResult;
