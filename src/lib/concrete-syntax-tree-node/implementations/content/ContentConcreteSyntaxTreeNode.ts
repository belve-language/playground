import type {ContentConcreteSyntaxTreeNodeAtom} from "./atom/ContentConcreteSyntaxTreeNodeAtom.ts";
import type {FunctionsAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/functions/FunctionsAbstractSyntaxTreeNode.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class ContentConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<ContentConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: ContentConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<FunctionsAbstractSyntaxTreeNode>
		| SuccessAbstractifyingResult<null> {
		const functions = this.atom.node;
		const functionsAbstractifyingResult = functions.abstractify();
		switch (functionsAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const conctentAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(functionsAbstractifyingResult.message);
				return conctentAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedFunctions = functionsAbstractifyingResult.data;
				if (abstractifiedFunctions === null) {
					const abstractifiedContent: null = null;
					const conctentAbstractifyingResult: SuccessAbstractifyingResult<null> =
						new SuccessAbstractifyingResult(abstractifiedContent);
					return conctentAbstractifyingResult;
				} else {
					const abstractifiedContent: FunctionsAbstractSyntaxTreeNode =
						abstractifiedFunctions;
					const conctentAbstractifyingResult: SuccessAbstractifyingResult<FunctionsAbstractSyntaxTreeNode> =
						new SuccessAbstractifyingResult(abstractifiedContent);
					return conctentAbstractifyingResult;
				}
			}
			// case errorAbstractifyingResultTypeName: {
			// 	// TODO
			// 	throw new Error("Not implemented.");
			// }
		}
	}
}
