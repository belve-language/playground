import type {SupportedStatementAbstractSyntaxTreeNode} from "./supported/SupportedStatementAbstractSyntaxTreeNode.ts";
import type {Function} from "../../../function/Function.ts";
import type {NonMainFunctions} from "../../../non-main-functions/NonMainFunctions.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import type {SupportedStatementExecutingResult} from "../../../statement-executing-result/supported/SupportedStatementExecutingResult.ts";
import type {Variables} from "../../../variables/Variables.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
export abstract class StatementAbstractSyntaxTreeNode<
	Children,
> extends AbstractSyntaxTreeNode<Children> {
	protected constructor(children: Children, spanIndexes: SpanIndexes) {
		super(children, spanIndexes);
	}
	public abstract execute(
		nonMainFunctions: NonMainFunctions<Function>,
		variables: Variables,
	): Generator<SupportedStatementExecutingResult, void, void>;
	public abstract mutate(
		functionsHeaders: readonly [
			FunctionHeaderAbstractSyntaxTreeNode,
			...FunctionHeaderAbstractSyntaxTreeNode[],
		],
		unknownsNames: readonly string[],
		userVariablesNames: readonly string[],
	): Generator<SupportedStatementAbstractSyntaxTreeNode, void, void>;
}
