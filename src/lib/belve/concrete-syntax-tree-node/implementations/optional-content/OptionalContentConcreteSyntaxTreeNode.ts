import type {OptionalContentConcreteSyntaxTreeNodeAtom} from "./atom/OptionalContentConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedFunctionsAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/functions/supported/SupportedFunctionsAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class OptionalContentConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalContentConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: OptionalContentConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<null>
		| SuccessAbstractifyingResult<SupportedFunctionsAbstractSyntaxTreeNode> {
		const content = this.atom.node;
		const contentAbstractifyingResult = content.abstractify();
		switch (contentAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const optionalContentAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(contentAbstractifyingResult.message);
				return optionalContentAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedContent = contentAbstractifyingResult.data;
				if (abstractifiedContent === null) {
					const abstractifiedOptionalContent: null = null;
					const optionalContentAbstractifyingResult: SuccessAbstractifyingResult<null> =
						new SuccessAbstractifyingResult(abstractifiedOptionalContent);
					return optionalContentAbstractifyingResult;
				} else {
					const abstractifiedOptionalContent: SupportedFunctionsAbstractSyntaxTreeNode =
						abstractifiedContent;
					const optionalContentAbstractifyingResult: SuccessAbstractifyingResult<SupportedFunctionsAbstractSyntaxTreeNode> =
						new SuccessAbstractifyingResult(abstractifiedOptionalContent);
					return optionalContentAbstractifyingResult;
				}
			}
		}
	}
}
