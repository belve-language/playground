import type {SupportedOperatorAbstractSyntaxTreeNode} from "./supported/SupportedOperatorAbstractSyntaxTreeNode.ts";
import type {Function} from "../../../function/Function.ts";
import type {NonMainFunctions} from "../../../non-main-functions/NonMainFunctions.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import type {SupportedStatementExecutingResult} from "../../../statement-executing-result/supported/SupportedStatementExecutingResult.ts";
import type {Variables} from "../../../variables/Variables.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {SupportedStatementAbstractSyntaxTreeNode} from "../statement/supported/SupportedStatementAbstractSyntaxTreeNode.ts";
import type {SupportedStatementsAbstractSyntaxTreeNode} from "../statements/supported/SupportedStatementsAbstractSyntaxTreeNode.ts";
// TODO no null
export abstract class OperatorAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode<null> {
	protected constructor(spanIndexes: SpanIndexes) {
		super(null, spanIndexes);
	}
	public abstract checkIfShouldConsiderStatementAsEncountered(
		statement: SupportedStatementAbstractSyntaxTreeNode,
	): readonly SupportedStatementAbstractSyntaxTreeNode[];
	public abstract mutate(): Generator<
		SupportedOperatorAbstractSyntaxTreeNode,
		void,
		void
	>;
	public abstract operate(
		availables: Variables,
		firstStatement: SupportedStatementAbstractSyntaxTreeNode,
		nonMainFunctions: NonMainFunctions<Function>,
		restStatements: SupportedStatementsAbstractSyntaxTreeNode,
	): Generator<SupportedStatementExecutingResult, void, void>;
}
