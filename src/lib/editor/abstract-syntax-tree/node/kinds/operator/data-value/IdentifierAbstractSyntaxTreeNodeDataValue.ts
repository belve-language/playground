import type {AndIdentifierAbstractSyntaxTreeNodeDataValue} from "./kinds/and/AndIdentifierAbstractSyntaxTreeNodeDataValue.ts";
import type {OrIdentifierAbstractSyntaxTreeNodeDataValue} from "./kinds/or/OrIdentifierAbstractSyntaxTreeNodeDataValue.ts";
export type OperatorAbstractSyntaxTreeNodeDataValue =
	| AndIdentifierAbstractSyntaxTreeNodeDataValue
	| OrIdentifierAbstractSyntaxTreeNodeDataValue;
