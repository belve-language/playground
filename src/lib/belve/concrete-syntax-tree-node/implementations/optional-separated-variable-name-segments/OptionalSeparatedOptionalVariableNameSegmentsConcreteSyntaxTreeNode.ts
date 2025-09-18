import type {OptionalSeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNodeAtom} from "./atom/OptionalSeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNodeAtom.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class OptionalSeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalSeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: OptionalSeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify(): readonly string[] {
		const separatedOptionalVariableNameSegments = this.atom.node;
		const separatedOptionalVariableNameSegmentsAbstractifyingResult =
			separatedOptionalVariableNameSegments.abstractify();
		switch (
			separatedOptionalVariableNameSegmentsAbstractifyingResult.typeName
		) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedSeparatedOptionalVariableNameSegments =
					separatedOptionalVariableNameSegmentsAbstractifyingResult.data;
				if (abstractifiedSeparatedOptionalVariableNameSegments === null) {
					const abstractifiedOptionalSeparatedOptionalVariableNameSegments: readonly [] =
						[];
					return abstractifiedOptionalSeparatedOptionalVariableNameSegments;
				} else {
					const abstractifiedOptionalSeparatedOptionalVariableNameSegments: readonly string[] =
						abstractifiedSeparatedOptionalVariableNameSegments;
					return abstractifiedOptionalSeparatedOptionalVariableNameSegments;
				}
			}
		}
	}
}
