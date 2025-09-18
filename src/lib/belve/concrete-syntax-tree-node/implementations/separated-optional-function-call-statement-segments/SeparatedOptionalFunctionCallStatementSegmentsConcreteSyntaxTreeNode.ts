import type {SeparatedOptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom} from "./atom/SeparatedOptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-statement-segment/supported/SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class SeparatedOptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<SeparatedOptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: SeparatedOptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify():
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<
				readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]
		  > {
		const whitespace = this.atom.leftSubAtom.node;
		const optionalFunctionCallStatementSegments = this.atom.rightSubAtom.node;
		const optionalFunctionCallStatementSegmentsAbstractifyingResult =
			optionalFunctionCallStatementSegments.abstractify();
		switch (
			optionalFunctionCallStatementSegmentsAbstractifyingResult.typeName
		) {
			case errorAbstractifyingResultTypeName: {
				const separatedOptionalFunctionCallStatementSegmentsAbstractifyingResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(
						optionalFunctionCallStatementSegmentsAbstractifyingResult.message,
					);
				return separatedOptionalFunctionCallStatementSegmentsAbstractifyingResult;
			}
			case successAbstractifyingResultTypeName: {
				const abstractifiedOptionalFunctionCallStatementSegments =
					optionalFunctionCallStatementSegmentsAbstractifyingResult.data;
				const abstractifiedSeparatedOptionalFunctionCallStatementSegments: readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[] =
					abstractifiedOptionalFunctionCallStatementSegments;
				const separatedOptionalFunctionCallStatementSegmentsAbstractifyingResult: SuccessAbstractifyingResult<
					readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]
				> = new SuccessAbstractifyingResult<
					readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]
				>(abstractifiedSeparatedOptionalFunctionCallStatementSegments);
				return separatedOptionalFunctionCallStatementSegmentsAbstractifyingResult;
			}
		}
	}
}
