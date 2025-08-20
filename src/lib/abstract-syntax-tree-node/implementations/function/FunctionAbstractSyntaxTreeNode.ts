import type {FunctionAbstractSyntaxTreeNodeData} from "./data/FunctionAbstractSyntaxTreeNodeData.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionAbstractSyntaxTreeNodeDataFunctions} from "../functions/data/functions/FunctionAbstractSyntaxTreeNodeDataFunctions.ts";
import {KnownFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../known-function-header-segment/KnownFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
export class FunctionAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode<FunctionAbstractSyntaxTreeNodeData> {
	public constructor(
		data: FunctionAbstractSyntaxTreeNodeData,
		spanIndexes: SpanIndexes,
	) {
		super(data, spanIndexes);
	}
	public call(
		functions: FunctionAbstractSyntaxTreeNodeDataFunctions,
		knowns: readonly unknown[],
	): null | readonly unknown[] {
		const knowns_ = Object.fromEntries(
			this.data.headerSegments
				.filter((segment) => {
					return (
						segment instanceof KnownFunctionHeaderSegmentAbstractSyntaxTreeNode
					);
				})
				.map((segment, knownIndex) => {
					return [segment.getVariableName(), knowns[knownIndex]];
				}),
		);
		const unknowns = this.data.block.execute(functions, [knowns_]);
		if (unknowns === null) {
			return null;
		} else {
			const unknowns_: readonly unknown[] = this.data.headerSegments
				.filter((segment) => {
					return (
						segment
						instanceof UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode
					);
				})
				.map((segment) => {
					return unknowns[segment.getVariableName()];
				});
			return unknowns_;
		}
	}
}
