import type {KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom} from "./atom/KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom.ts";
import type {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import type {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<string> {
		const paddedVariableName = this.atom.node;
		const paddedVariableNameAbstractifyingResult =
			paddedVariableName.abstractify();
		const result = paddedVariableNameAbstractifyingResult;
		return result;
	}
}
