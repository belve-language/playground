import type {NonMainFunctions} from "../../../non-main-functions/NonMainFunctions.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import type {SupportedStatementExecutingResult} from "../../../statement-executing-result/supported/SupportedStatementExecutingResult.ts";
import type {Variables} from "../../../variables/Variables.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {SupportedStatementAbstractSyntaxTreeNode} from "../statement/supported/SupportedStatementAbstractSyntaxTreeNode.ts";
import type {StatementsAbstractSyntaxTreeNode} from "../statements/StatementsAbstractSyntaxTreeNode.ts";
import type {OperatorAbstractSyntaxTreeNodeChildren} from "./children/OperatorAbstractSyntaxTreeNodeChildren.ts";
import type {SupportedOperatorAbstractSyntaxTreeNode} from "./supported/SupportedOperatorAbstractSyntaxTreeNode.ts";
export abstract class OperatorAbstractSyntaxTreeNode<
	TypeName extends string,
> extends AbstractSyntaxTreeNode<
	OperatorAbstractSyntaxTreeNodeChildren<TypeName>
> {
	protected constructor(spanIndexes: SpanIndexes, typeName: TypeName) {
		super({typeName: typeName}, spanIndexes);
	}
	public abstract mutate(): Generator<
		SupportedOperatorAbstractSyntaxTreeNode,
		void,
		void
	>;
	public abstract operate(
		firstStatement: SupportedStatementAbstractSyntaxTreeNode,
		nonMainFunctions: NonMainFunctions,
		restStatements: StatementsAbstractSyntaxTreeNode,
		variables: Variables,
	): Generator<SupportedStatementExecutingResult, void, void>;
}
