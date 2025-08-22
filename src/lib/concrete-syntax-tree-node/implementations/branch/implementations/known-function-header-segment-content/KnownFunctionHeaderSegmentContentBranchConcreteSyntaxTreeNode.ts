import type {KnownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeChildren} from "./children/KnownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeChildren.ts";
import {knownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/knownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeTypeName.ts";
import {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import {whitespaceBranchConcreteSyntaxTreeNodeTypeName} from "../whitespace/type-name/whitespaceBranchConcreteSyntaxTreeNodeTypeName.ts";
export class KnownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	KnownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeChildren,
	typeof knownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: KnownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(
			children,
			knownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<string> {
		if (
			this.children[0].typeName
			=== whitespaceBranchConcreteSyntaxTreeNodeTypeName
		) {
			const result = new ErrorAbstractifyingResult("No variable name.");
			return result;
		} else {
			const name = this.children[0].abstractify();
			const result = new SuccessAbstractifyingResult(name);
			return result;
		}
	}
}
