import type {OperatorCharacter} from "../../../../characters/operator/OperatorCharacter.ts";
import type {StatementAbstractSyntaxTreeNode} from "../../statement/StatementAbstractSyntaxTreeNode.ts";
export type OperatedStatementAbstractSyntaxTreeNodeChildren = {
	readonly statement: StatementAbstractSyntaxTreeNode;
	readonly operator: OperatorCharacter;
};
