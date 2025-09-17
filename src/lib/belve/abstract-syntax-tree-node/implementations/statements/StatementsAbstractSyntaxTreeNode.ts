import type {NonMainFunctions} from "../../../non-main-functions/NonMainFunctions.ts";
import {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import type {SupportedStatementExecutingResult} from "../../../statement-executing-result/supported/SupportedStatementExecutingResult.ts";
import type {Variables} from "../../../variables/Variables.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import type {SupportedStatementsAbstractSyntaxTreeNode} from "./supported/SupportedStatementsAbstractSyntaxTreeNode.ts";
export abstract class StatementsAbstractSyntaxTreeNode<
	ChildrenToUse,
> extends AbstractSyntaxTreeNode<ChildrenToUse> {
	protected constructor(children: ChildrenToUse, spanIndexes: SpanIndexes) {
		super(children, spanIndexes);
	}
	public abstract execute(
		nonMainFunctions: NonMainFunctions,
		variables: Variables,
	): Generator<SupportedStatementExecutingResult, void, void>;
	public abstract mutate(
		functionsHeaders: readonly FunctionHeaderAbstractSyntaxTreeNode[],
		unknownsNames: readonly string[],
		userVariablesNames: readonly string[],
	): Generator<SupportedStatementsAbstractSyntaxTreeNode, void, void>;
}
