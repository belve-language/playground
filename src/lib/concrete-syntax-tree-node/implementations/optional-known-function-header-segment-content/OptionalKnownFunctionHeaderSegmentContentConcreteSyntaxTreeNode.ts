import type {OptionalKnownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom} from "./atom/OptionalKnownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import type {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class OptionalKnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalKnownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: OptionalKnownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<string> {
		const knownFunctionHeaderSegmentContent = this.atom.node;
		const knownFunctionHeaderSegmentContentAbstractifyingResult =
			knownFunctionHeaderSegmentContent.abstractify();
		switch (knownFunctionHeaderSegmentContentAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const optionalKnownFunctionHeaderSegmentContentAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						knownFunctionHeaderSegmentContentAbstractifyingResult.message,
					);
				return optionalKnownFunctionHeaderSegmentContentAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedKnownFunctionHeaderSegmentContent =
					knownFunctionHeaderSegmentContentAbstractifyingResult.data;
				if (abstractifiedKnownFunctionHeaderSegmentContent === null) {
					const optionalKnownFunctionHeaderSegmentContentAbstractifyingResult: ErrorAbstractifyingResult =
						new ErrorAbstractifyingResult(
							"OptionalKnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode contains no KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode",
						);
					return optionalKnownFunctionHeaderSegmentContentAbstractifyingResult;
				} else {
					const optionalKnownFunctionHeaderSegmentContentAbstractifyingResult: SuccessAbstractifyingResult<string> =
						knownFunctionHeaderSegmentContentAbstractifyingResult;
					return optionalKnownFunctionHeaderSegmentContentAbstractifyingResult;
				}
			}
		}
	}
}
