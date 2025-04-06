import type {FunctionAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function/FunctionAbstractSyntaxTreeNode.ts";
import {createSourceFileContentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/source-file-content/creating/createSourceFileContentAbstractSyntaxTreeNode.ts";
import type {SourceFileContentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/source-file-content/SourceFileContentAbstractSyntaxTreeNode.ts";
import type {SourceFileContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/tree-node-types/source-file-content/SourceFileContentConcreteSyntaxTreeNode.ts";
import {abstractifyFunctions} from "../functions/abstractifyFunctions.ts";
export function abstractifySourceFileContent(
	sourceFileContent: SourceFileContentConcreteSyntaxTreeNode,
): SourceFileContentAbstractSyntaxTreeNode {
	const [, sourceFileContentFunctions] = sourceFileContent.data.children;
	const abstractifiedSourceFileContentFunctions: readonly [
		FunctionAbstractSyntaxTreeNode,
		...FunctionAbstractSyntaxTreeNode[],
	] = abstractifyFunctions(sourceFileContentFunctions);
	const abstractifiedSourceFileContent: SourceFileContentAbstractSyntaxTreeNode =
		createSourceFileContentAbstractSyntaxTreeNode(
			abstractifiedSourceFileContentFunctions,
		);
	return abstractifiedSourceFileContent;
}
