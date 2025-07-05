import type {FunctionAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function/FunctionAbstractSyntaxTreeNode.ts";
import {createSourceFileContentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/source-file-content/creating/createSourceFileContentAbstractSyntaxTreeNode.ts";
import type {SourceFileContentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/source-file-content/SourceFileContentAbstractSyntaxTreeNode.ts";
import type {SourceFileContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/source-file-content/SourceFileContentConcreteSyntaxTreeNode.ts";
import type {SupportedSubsubabstractifyResult} from "../../subsubabstractify-result/supported/SupportedSubsubabstractifyResult.ts";
import {subabstractifyFunctions} from "../functions/subabstractifyFunctions.ts";
export function subabstractifySourceFileContent(
	sourceFileContent: SourceFileContentConcreteSyntaxTreeNode,
): SupportedSubsubabstractifyResult<SourceFileContentAbstractSyntaxTreeNode> {
	// const [, sourceFileContentFunctions] = sourceFileContent.data.children;
	// const abstractifiedSourceFileContentFunctions: readonly [
	// 	FunctionAbstractSyntaxTreeNode,
	// 	...FunctionAbstractSyntaxTreeNode[],
	// ] = subabstractifyFunctions(sourceFileContentFunctions);
	// return
	// createSourceFileContentAbstractSyntaxTreeNode(
	// 	abstractifiedSourceFileContentFunctions,
	// );
}
