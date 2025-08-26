import type {SuccessFeedingFinalizingResultData} from "./data/SuccessFeedingFinalizingResultData.ts";
import {FeedingFinalizingResult} from "../../FeedingFinalizingResult.ts";
import {successFeedingFinalizingResultTypeName} from "./type-name/successFeedingFinalizingResultTypeName.ts";
import type {ContentBranchConcreteSyntaxTreeNode} from "../../../../../../concrete-syntax-tree-node/implementations/branch/implementations/content/ContentBranchConcreteSyntaxTreeNode.ts";
export class SuccessFeedingFinalizingResult extends FeedingFinalizingResult<
	SuccessFeedingFinalizingResultData,
	typeof successFeedingFinalizingResultTypeName
> {
	private constructor(data: SuccessFeedingFinalizingResultData) {
		super(data, successFeedingFinalizingResultTypeName);
	}
	public static create(
		content: ContentBranchConcreteSyntaxTreeNode,
	): SuccessFeedingFinalizingResult {
		const result = new SuccessFeedingFinalizingResult({content: content});
		return result;
	}
}
