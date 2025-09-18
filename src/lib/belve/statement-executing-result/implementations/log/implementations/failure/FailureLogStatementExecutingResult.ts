import type {AbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/AbstractSyntaxTreeNode.ts";
import type {Variables} from "../../../../../variables/Variables.ts";
import {LogStatementExecutingResult} from "../../LogStatementExecutingResult.ts";
import {failureLogStatementExecutingResultActionTypeName} from "./action-type-name/failureLogStatementExecutingResultActionTypeName.ts";
export class FailureLogStatementExecutingResult extends LogStatementExecutingResult<
	typeof failureLogStatementExecutingResultActionTypeName
> {
	public constructor(
		node: AbstractSyntaxTreeNode<unknown>,
		variables: Variables,
	) {
		super(failureLogStatementExecutingResultActionTypeName, node, variables);
	}
}
