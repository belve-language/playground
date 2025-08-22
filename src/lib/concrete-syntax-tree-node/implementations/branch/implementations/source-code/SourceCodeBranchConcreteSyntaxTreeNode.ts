import type {SourceCodeBranchConcreteSyntaxTreeNodeChildren} from "./children/SourceCodeBranchConcreteSyntaxTreeNodeChildren.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import {sourceCodeBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/sourceCodeBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {FunctionsAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/functions/FunctionsAbstractSyntaxTreeNode.ts";
import type {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import type {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {paddedFunctionsBranchConcreteSyntaxTreeNodeTypeName} from "../padded-functions/type-name/paddedFunctionsBranchConcreteSyntaxTreeNodeTypeName.ts";
import {whitespaceBranchConcreteSyntaxTreeNodeTypeName} from "../whitespace/type-name/whitespaceBranchConcreteSyntaxTreeNodeTypeName.ts";
export class SourceCodeBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	SourceCodeBranchConcreteSyntaxTreeNodeChildren,
	typeof sourceCodeBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(children: SourceCodeBranchConcreteSyntaxTreeNodeChildren) {
		super(children, sourceCodeBranchConcreteSyntaxTreeNodeTypeName);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| null
		| SuccessAbstractifyingResult<FunctionsAbstractSyntaxTreeNode> {
		switch (this.children[0].typeName) {
			case whitespaceBranchConcreteSyntaxTreeNodeTypeName: {
				return null;
			}
			case paddedFunctionsBranchConcreteSyntaxTreeNodeTypeName: {
				const result = this.children[0].abstractify();
				return result;
			}
		}
	}
}
