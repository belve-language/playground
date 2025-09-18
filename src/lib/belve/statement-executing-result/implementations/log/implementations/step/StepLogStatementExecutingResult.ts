import type {AbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/AbstractSyntaxTreeNode.ts";
import type {Variables} from "../../../../../variables/Variables.ts";
import {LogStatementExecutingResult} from "../../LogStatementExecutingResult.ts";
import {stepLogStatementExecutingResultActionTypeName} from "./action-type-name/stepLogStatementExecutingResultActionTypeName.ts";
export class StepLogStatementExecutingResult extends LogStatementExecutingResult<
	typeof stepLogStatementExecutingResultActionTypeName
> {
	public constructor(
		node: AbstractSyntaxTreeNode<unknown>,
		variables: Variables,
	) {
		super(stepLogStatementExecutingResultActionTypeName, node, variables);
	}
}
