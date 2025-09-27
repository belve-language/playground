import {logStatementExecutingResultTypeName} from "./type-name/logStatementExecutingResultTypeName.ts";
import type {AbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/AbstractSyntaxTreeNode.ts";
import type {Variables} from "../../../variables/Variables.ts";
import {StatementExecutingResult} from "../../StatementExecutingResult.ts";
export abstract class LogStatementExecutingResult<
	ActionTypeName extends string,
> extends StatementExecutingResult<typeof logStatementExecutingResultTypeName> {
	protected constructor(
		actionTypeName: ActionTypeName,
		availables: Variables,
		node: AbstractSyntaxTreeNode<unknown>,
	) {
		super(logStatementExecutingResultTypeName);
		this.actionTypeName = actionTypeName;
		this.availables = availables;
		this.node = node;
	}
	public readonly actionTypeName: ActionTypeName;
	public readonly availables: Variables;
	public readonly node: AbstractSyntaxTreeNode<unknown>;
}
