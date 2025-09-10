import type {VariableNameConcreteSyntaxTreeNodeAtom} from "./atom/VariableNameConcreteSyntaxTreeNodeAtom.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class VariableNameConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<VariableNameConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: VariableNameConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify(): string {
		const word = this.atom.node;
		const wordAbstractifyingResult = word.abstractify();
		switch (wordAbstractifyingResult.typeName) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedWord = wordAbstractifyingResult.data;
				const abstractifiedVariableName: string = abstractifiedWord;
				return abstractifiedVariableName;
			}
		}
	}
}
