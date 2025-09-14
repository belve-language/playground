import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import type {EmptyAtom} from "../../../atom/implementations/empty/EmptyAtom.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class EmptyConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<EmptyAtom> {
	public constructor(atom: EmptyAtom) {
		super(atom);
	}
	public abstractify(): SuccessAbstractifyingResult<null> {
		const emptyAbstractifyingResult: SuccessAbstractifyingResult<null> =
			new SuccessAbstractifyingResult<null>(null);
		return emptyAbstractifyingResult;
	}
}
