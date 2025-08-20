import type {FunctionsAbstractSyntaxTreeNodeData} from "./data/FunctionsAbstractSyntaxTreeNodeData.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
export class FunctionsAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode<FunctionsAbstractSyntaxTreeNodeData> {
	public constructor(
		data: FunctionsAbstractSyntaxTreeNodeData,
		spanIndexes: SpanIndexes,
	) {
		super(data, spanIndexes);
	}
}
