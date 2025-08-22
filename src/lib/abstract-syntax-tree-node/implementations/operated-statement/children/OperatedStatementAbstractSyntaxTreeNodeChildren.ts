import type {OperatorCharacter} from "../../../../characters/operator/OperatorCharacter.ts";
import type {SupportedStatementAbstractSyntaxTreeNode} from "../../../supported-statement/SupportedStatementAbstractSyntaxTreeNode.ts";
export type OperatedStatementAbstractSyntaxTreeNodeChildren = {
	readonly statement: SupportedStatementAbstractSyntaxTreeNode;
	readonly operator: OperatorCharacter;
};
