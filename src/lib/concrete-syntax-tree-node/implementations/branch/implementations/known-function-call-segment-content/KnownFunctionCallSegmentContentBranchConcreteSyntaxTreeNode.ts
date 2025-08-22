import type {KnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren} from "./children/KnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren.ts";
import {knownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/knownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {ErrorAbstractifyingResult} from "../../../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {SuccessAbstractifyingResult} from "../../../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import {whitespaceBranchConcreteSyntaxTreeNodeTypeName} from "../whitespace/type-name/whitespaceBranchConcreteSyntaxTreeNodeTypeName.ts";
export class KnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	KnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren,
	typeof knownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: KnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(
			children,
			knownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeTypeName,
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
