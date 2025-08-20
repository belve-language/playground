import type {SourceCodeBranchConcreteSyntaxTreeNodeChildren} from "./children/SourceCodeBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import type {SupportedAbstractifyingResult} from "../../../../abstractifying/result/supported/SupportedAbstractifyingResult.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import {sourceCodeBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/sourceCodeBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {FunctionsAbstractSyntaxTreeNodeData} from "../../../../../abstract-syntax-tree-node/implementations/functions/data/FunctionsAbstractSyntaxTreeNodeData.ts";
import {paddedFunctionsBranchConcreteSyntaxTreeNodeTypeName} from "../padded-functions/type-name/paddedFunctionsBranchConcreteSyntaxTreeNodeTypeName.ts";
import {whitespaceBranchConcreteSyntaxTreeNodeTypeName} from "../whitespace/type-name/whitespaceBranchConcreteSyntaxTreeNodeTypeName.ts";
export class SourceCodeBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	SourceCodeBranchConcreteSyntaxTreeNodeChildren,
	typeof sourceCodeBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: SourceCodeBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			spanIndexes,
			sourceCodeBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
	public abstractify(): null | SupportedAbstractifyingResult<FunctionsAbstractSyntaxTreeNodeData> {
		switch (this.children[0].typeName) {
			case whitespaceBranchConcreteSyntaxTreeNodeTypeName: {
				return null;
			}
			case paddedFunctionsBranchConcreteSyntaxTreeNodeTypeName: {
				return this.children[0].abstractify();
			}
		}
	}
}
