import type {OptionalFunctionHeaderConcreteSyntaxTreeNodeAtom} from "./atom/OptionalFunctionHeaderConcreteSyntaxTreeNodeAtom.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class OptionalFunctionHeaderConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalFunctionHeaderConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: OptionalFunctionHeaderConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<FunctionHeaderAbstractSyntaxTreeNode | null> {
		const functionHeader = this.atom.node;
		const functionHeaderAbstractifyingResult = functionHeader.abstractify();
		switch (functionHeaderAbstractifyingResult.typeName) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedFunctionHeader =
					functionHeaderAbstractifyingResult.data;
				const abstractifiedOptionalFunctionHeader: FunctionHeaderAbstractSyntaxTreeNode | null =
					abstractifiedFunctionHeader;
				const optionalFunctionHeaderAbstractifyingResult: SuccessAbstractifyingResult<FunctionHeaderAbstractSyntaxTreeNode | null> =
					new SuccessAbstractifyingResult(abstractifiedOptionalFunctionHeader);
				return optionalFunctionHeaderAbstractifyingResult;
			}
			case errorAbstractifyingResultTypeName: {
				const optionalFunctionHeaderAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						functionHeaderAbstractifyingResult.message,
					);
				return optionalFunctionHeaderAbstractifyingResult;
			}
		}
	}
}
