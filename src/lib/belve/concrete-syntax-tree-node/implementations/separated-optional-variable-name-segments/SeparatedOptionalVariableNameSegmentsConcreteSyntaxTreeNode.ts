import type {SeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNodeAtom} from "./atom/SeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNodeAtom.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class SeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<SeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: SeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify(): SuccessAbstractifyingResult<readonly string[]> {
		const whitespace = this.atom.leftSubAtom.node;
		const optionalVariableNameSegments = this.atom.rightSubAtom.node;
		const abstractifiedOptionalVariableNameSegments =
			optionalVariableNameSegments.abstractify();
		const separatedOptionalVariableNameSegments: readonly string[] =
			abstractifiedOptionalVariableNameSegments;
		const separatedOptionalVariableNameSegmentsAbstractifyingResult: SuccessAbstractifyingResult<
			readonly string[]
		> = new SuccessAbstractifyingResult<readonly string[]>(
			separatedOptionalVariableNameSegments,
		);
		return separatedOptionalVariableNameSegmentsAbstractifyingResult;
	}
}
