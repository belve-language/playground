import type {OptionalVariableNameSegmentsConcreteSyntaxTreeNodeAtom} from "./atom/OptionalVariableNameSegmentsConcreteSyntaxTreeNodeAtom.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class OptionalVariableNameSegmentsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalVariableNameSegmentsConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: OptionalVariableNameSegmentsConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify(): readonly string[] {
		const variableNameSegments = this.atom.node;
		const variableNameSegmentsAbstractifyingResult =
			variableNameSegments.abstractify();
		switch (variableNameSegmentsAbstractifyingResult.typeName) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedVariableNameSegments =
					variableNameSegmentsAbstractifyingResult.data;
				// TODO: Separate empty concrete node
				// then no success...result is needed
				if (abstractifiedVariableNameSegments === null) {
					const abstractifiedOptionalVariableNameSegments: readonly [] = [];
					return abstractifiedOptionalVariableNameSegments;
				} else {
					const abstractifiedOptionalVariableNameSegments: readonly [
						string,
						...(readonly string[]),
					] = abstractifiedVariableNameSegments;
					return abstractifiedOptionalVariableNameSegments;
				}
			}
		}
	}
}
