import type {OperatorCharacter} from "../../../../characters/operator/OperatorCharacter.ts";
export type SeparatedStatementsAbstractSyntaxTreeNodeData = {
	readonly statement: StatementAbstractSyntaxTreeNode;
	readonly operator: OperatorCharacter;
	readonly restStatements: StatementsAbstractSyntaxTreeNode;
};
