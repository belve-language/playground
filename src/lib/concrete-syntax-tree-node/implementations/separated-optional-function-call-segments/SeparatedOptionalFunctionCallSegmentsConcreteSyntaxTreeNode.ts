import type {SeparatedOptionalFunctionCallSegmentsConcreteSyntaxTreeNodeAtom} from "./atom/SeparatedOptionalFunctionCallSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-segment/supported/SupportedFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class SeparatedOptionalFunctionCallSegmentsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<SeparatedOptionalFunctionCallSegmentsConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: SeparatedOptionalFunctionCallSegmentsConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]
		  > {
		const whitespace = this.atom.leftSubAtom.node;
		const optionalFunctionCallSegments = this.atom.rightSubAtom.node;
		const optionalFunctionCallSegmentsAbstractifyingResult =
			optionalFunctionCallSegments.abstractify();
		switch (optionalFunctionCallSegmentsAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const separatedOptionalFunctionCallSegmentsAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						optionalFunctionCallSegmentsAbstractifyingResult.message,
					);
				return separatedOptionalFunctionCallSegmentsAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedOptionalFunctionCallSegments =
					optionalFunctionCallSegmentsAbstractifyingResult.data;
				const abstractifiedSeparatedOptionalFunctionCallSegments: readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[] =
					abstractifiedOptionalFunctionCallSegments;
				const separatedOptionalFunctionCallSegmentsAbstractifyingResult: SuccessAbstractifyingResult<
					readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]
				> = new SuccessAbstractifyingResult(
					abstractifiedSeparatedOptionalFunctionCallSegments,
				);
				return separatedOptionalFunctionCallSegmentsAbstractifyingResult;
			}
		}
	}
}
