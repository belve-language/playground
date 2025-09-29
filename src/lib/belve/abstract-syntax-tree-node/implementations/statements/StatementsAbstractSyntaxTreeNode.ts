import type {SupportedStatementsAbstractSyntaxTreeNode} from "./supported/SupportedStatementsAbstractSyntaxTreeNode.ts";
import type {BuiltInFunction} from "../../../../playground/built-in-functions/built-in-function/BuiltInFunction.ts";
import type {Function} from "../../../function/Function.ts";
import type {NonMainFunctions} from "../../../non-main-functions/NonMainFunctions.ts";
import {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import type {SupportedStatementExecutingResult} from "../../../statement-executing-result/supported/SupportedStatementExecutingResult.ts";
import type {Variables} from "../../../variables/Variables.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {NonMainFunctionAbstractSyntaxTreeNode} from "../function/implementations/non-main/NonMainFunctionAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import type {SupportedStatementAbstractSyntaxTreeNode} from "../statement/supported/SupportedStatementAbstractSyntaxTreeNode.ts";
export abstract class StatementsAbstractSyntaxTreeNode<
	ChildrenToUse,
> extends AbstractSyntaxTreeNode<ChildrenToUse> {
	protected constructor(children: ChildrenToUse, spanIndexes: SpanIndexes) {
		super(children, spanIndexes);
	}
	public abstract execute(
		nonMainFunctions: NonMainFunctions<Function>,
		variables: Variables,
	): Generator<SupportedStatementExecutingResult, void, void>;
	public abstract lint(
		builtInFunctions: NonMainFunctions<BuiltInFunction>,
		encounteredStatements: readonly SupportedStatementAbstractSyntaxTreeNode[],
		hasEncounteredOtherStatements: boolean,
		nonMainFunctions: NonMainFunctions<NonMainFunctionAbstractSyntaxTreeNode>,
	): readonly string[];
	public abstract mutate(
		functionsHeaders: readonly FunctionHeaderAbstractSyntaxTreeNode[],
		unknownsNames: readonly string[],
		userVariablesNames: readonly string[],
	): Generator<SupportedStatementsAbstractSyntaxTreeNode, void, void>;
}
