import type {SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom} from "./atom/SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-header-segment/supported/SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]
		  > {
		const whitespace = this.atom.leftSubAtom.node;
		const optionalFunctionHeaderSegments = this.atom.rightSubAtom.node;
		const optionalFunctionHeaderSegmentsAbstractifyingResult =
			optionalFunctionHeaderSegments.abstractify();
		switch (optionalFunctionHeaderSegmentsAbstractifyingResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const separatedOptionalFunctionHeaderSegmentsAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						optionalFunctionHeaderSegmentsAbstractifyingResult.message,
					);
				return separatedOptionalFunctionHeaderSegmentsAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedOptionalFunctionHeaderSegments =
					optionalFunctionHeaderSegmentsAbstractifyingResult.data;
				const abstractifiedSeparatedOptionalFunctionHeaderSegments: readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[] =
					abstractifiedOptionalFunctionHeaderSegments;
				const separatedOptionalFunctionHeaderSegmentsAbstractifyingResult: SuccessAbstractifyingResult<
					readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]
				> = new SuccessAbstractifyingResult(
					abstractifiedSeparatedOptionalFunctionHeaderSegments,
				);
				return separatedOptionalFunctionHeaderSegmentsAbstractifyingResult;
			}
		}
	}
}
