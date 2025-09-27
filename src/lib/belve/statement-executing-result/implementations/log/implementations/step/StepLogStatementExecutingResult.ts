import type {AbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/AbstractSyntaxTreeNode.ts";
import type {Variables} from "../../../../../variables/Variables.ts";
import {LogStatementExecutingResult} from "../../LogStatementExecutingResult.ts";
import {stepLogStatementExecutingResultActionTypeName} from "./action-type-name/stepLogStatementExecutingResultActionTypeName.ts";
export class StepLogStatementExecutingResult extends LogStatementExecutingResult<
	typeof stepLogStatementExecutingResultActionTypeName
> {
	public constructor(
		availables: Variables,
		node: AbstractSyntaxTreeNode<unknown>,
	) {
		super(stepLogStatementExecutingResultActionTypeName, availables, node);
	}
}
