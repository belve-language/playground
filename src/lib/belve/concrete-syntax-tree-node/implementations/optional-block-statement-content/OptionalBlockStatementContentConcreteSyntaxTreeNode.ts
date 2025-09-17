import type {OptionalBlockStatementContentConcreteSyntaxTreeNodeAtom} from "./atom/OptionalBlockStatementContentConcreteSyntaxTreeNodeAtom.ts";
import type {BlockStatementAbstractSyntaxTreeNodeChildren} from "../../../abstract-syntax-tree-node/implementations/statement/implementations/block/children/BlockStatementAbstractSyntaxTreeNodeChildren.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class OptionalBlockStatementContentConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalBlockStatementContentConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: OptionalBlockStatementContentConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<BlockStatementAbstractSyntaxTreeNodeChildren> {
		const blockStatementContent = this.atom.node;
		const blockStatementContentAbstractifyingResult =
			blockStatementContent.abstractify();
		switch (blockStatementContentAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const optionalBlockStatementContentAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						blockStatementContentAbstractifyingResult.message,
					);
				return optionalBlockStatementContentAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedBlockStatementContent =
					blockStatementContentAbstractifyingResult.data;
				const abstractifiedOptionalBlockStatementContent =
					abstractifiedBlockStatementContent;
				if (abstractifiedOptionalBlockStatementContent === null) {
					const result: ErrorAbstractifyingResult =
						new ErrorAbstractifyingResult(
							"Could not abstractify optional block content because its block content was empty.",
						);
					return result;
				} else {
					const optionalBlockStatementContentAbstractifyingResult: SuccessAbstractifyingResult<BlockStatementAbstractSyntaxTreeNodeChildren> =
						new SuccessAbstractifyingResult(
							abstractifiedOptionalBlockStatementContent,
						);
					return optionalBlockStatementContentAbstractifyingResult;
				}
			}
		}
	}
}
