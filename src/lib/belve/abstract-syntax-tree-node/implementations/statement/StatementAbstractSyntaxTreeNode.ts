import type {SupportedStatementAbstractSyntaxTreeNode} from "./supported/SupportedStatementAbstractSyntaxTreeNode.ts";
import type {BuiltInFunction} from "../../../../playground/built-in-functions/built-in-function/BuiltInFunction.ts";
import type {Function} from "../../../function/Function.ts";
import type {NonMainFunctions} from "../../../non-main-functions/NonMainFunctions.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import type {SupportedStatementExecutingResult} from "../../../statement-executing-result/supported/SupportedStatementExecutingResult.ts";
import type {Variables} from "../../../variables/Variables.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {NonMainFunctionAbstractSyntaxTreeNode} from "../function/implementations/non-main/NonMainFunctionAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import type {BlockStatementAbstractSyntaxTreeNode} from "./implementations/block/BlockStatementAbstractSyntaxTreeNode.ts";
import type {FunctionCallStatementAbstractSyntaxTreeNode} from "./implementations/function-call/FunctionCallStatementAbstractSyntaxTreeNode.ts";
export abstract class StatementAbstractSyntaxTreeNode<
	Children,
> extends AbstractSyntaxTreeNode<Children> {
	protected constructor(children: Children, spanIndexes: SpanIndexes) {
		super(children, spanIndexes);
	}
	public abstract checkIfBlockIsEqualTo(
		other: BlockStatementAbstractSyntaxTreeNode,
	): readonly string[];
	public abstract checkIfFunctionCallIsEqualTo(
		other: FunctionCallStatementAbstractSyntaxTreeNode,
	): readonly string[];
	public abstract checkIfWasAlreadyUsed(
		encounteredStatements: readonly SupportedStatementAbstractSyntaxTreeNode[],
	): readonly string[];
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
		functionsHeaders: readonly [
			FunctionHeaderAbstractSyntaxTreeNode,
			...FunctionHeaderAbstractSyntaxTreeNode[],
		],
		unknownsNames: readonly string[],
		userVariablesNames: readonly string[],
	): Generator<SupportedStatementAbstractSyntaxTreeNode, void, void>;
}
