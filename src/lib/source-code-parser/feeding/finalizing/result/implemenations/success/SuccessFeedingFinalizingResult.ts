import type {SuccessFeedingFinalizingResultData} from "./data/SuccessFeedingFinalizingResultData.ts";
import {FeedingFinalizingResult} from "../../FeedingFinalizingResult.ts";
import {successFeedingFinalizingResultTypeName} from "./type-name/successFeedingFinalizingResultTypeName.ts";
import type {SourceCodeBranchConcreteSyntaxTreeNode} from "../../../../../../concrete-syntax-tree-node/implementations/branch/implementations/source-code/SourceCodeBranchConcreteSyntaxTreeNode.ts";
export class SuccessFeedingFinalizingResult extends FeedingFinalizingResult<
	SuccessFeedingFinalizingResultData,
	typeof successFeedingFinalizingResultTypeName
> {
	public constructor(
		concreteSyntaxTree: SourceCodeBranchConcreteSyntaxTreeNode,
	) {
		super(
			{concreteSyntaxTree: concreteSyntaxTree},
			successFeedingFinalizingResultTypeName,
		);
	}
}
