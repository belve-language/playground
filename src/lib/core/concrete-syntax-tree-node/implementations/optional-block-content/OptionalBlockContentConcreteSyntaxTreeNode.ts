import type {OptionalBlockContentConcreteSyntaxTreeNodeAtom} from "./atom/OptionalBlockContentConcreteSyntaxTreeNodeAtom.ts";
import type {BlockStatementAbstractSyntaxTreeNodeChildren} from "../../../abstract-syntax-tree-node/implementations/statement/implementations/block/children/BlockStatementAbstractSyntaxTreeNodeChildren.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class OptionalBlockContentConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalBlockContentConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: OptionalBlockContentConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<BlockStatementAbstractSyntaxTreeNodeChildren> {
		const blockContent = this.atom.node;
		const blockContentAbstractifyingResult = blockContent.abstractify();
		switch (blockContentAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const optionalBlockContentAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						blockContentAbstractifyingResult.message,
					);
				return optionalBlockContentAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedBlockContent = blockContentAbstractifyingResult.data;
				const abstractifiedOptionalBlockContent = abstractifiedBlockContent;
				if (abstractifiedOptionalBlockContent === null) {
					const result: ErrorAbstractifyingResult =
						new ErrorAbstractifyingResult(
							"Could not abstractify optional block content because its block content was empty.",
						);
					return result;
				} else {
					const optionalBlockContentAbstractifyingResult: SuccessAbstractifyingResult<BlockStatementAbstractSyntaxTreeNodeChildren> =
						new SuccessAbstractifyingResult(abstractifiedOptionalBlockContent);
					return optionalBlockContentAbstractifyingResult;
				}
			}
		}
	}
}
