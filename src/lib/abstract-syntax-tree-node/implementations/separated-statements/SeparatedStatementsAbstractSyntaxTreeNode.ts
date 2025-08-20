import type {SeparatedStatementsAbstractSyntaxTreeNodeData} from "./data/SeparatedStatementsAbstractSyntaxTreeNodeData.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
export class SeparatedStatementsAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode<SeparatedStatementsAbstractSyntaxTreeNodeData> {
	public constructor(
		data: SeparatedStatementsAbstractSyntaxTreeNodeData,
		spanIndexes: SpanIndexes,
	) {
		super(data, spanIndexes);
	}
}
