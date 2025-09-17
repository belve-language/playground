import type {VariableNameSegmentsConcreteSyntaxTreeNodeAtom} from "./atom/VariableNameSegmentsConcreteSyntaxTreeNodeAtom.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class VariableNameSegmentsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<VariableNameSegmentsConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: VariableNameSegmentsConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify(): SuccessAbstractifyingResult<
		readonly [string, ...(readonly string[])]
	> {
		const variableNameSegment = this.atom.leftSubAtom.node;
		const optionalSeparatedOptionalVariableNameSegments =
			this.atom.rightSubAtom.node;
		const abstractifiedVariableNameSegment = variableNameSegment.abstractify();
		const abstractifiedSeparatedOptionalVariableNameSegments =
			optionalSeparatedOptionalVariableNameSegments.abstractify();
		const abstractifiedVariableNameSegments: readonly [
			string,
			...(readonly string[]),
		] = [
			abstractifiedVariableNameSegment,
			...abstractifiedSeparatedOptionalVariableNameSegments,
		];
		const variableNameSegmentsAbstractifyingResult: SuccessAbstractifyingResult<
			readonly [string, ...(readonly string[])]
		> = new SuccessAbstractifyingResult<
			readonly [string, ...(readonly string[])]
		>(abstractifiedVariableNameSegments);
		return variableNameSegmentsAbstractifyingResult;
	}
}
