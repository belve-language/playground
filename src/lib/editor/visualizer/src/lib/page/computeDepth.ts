// function computeDepth(
// 	node:
// 		| BlockOpeningBracketConcreteSyntaxTreeNode
// 		| BlockClosingBracketConcreteSyntaxTreeNode
// 		| BlockConcreteSyntaxTreeNode
// 		| BlockContentConcreteSyntaxTreeNode
// 		| FunctionBodyConcreteSyntaxTreeNode
// 		| FunctionCallConcreteSyntaxTreeNode
// 		| FunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode
// 		| FunctionCallKnownSegmentConcreteSyntaxTreeNode
// 		| FunctionCallKnownSegmentContentConcreteSyntaxTreeNode
// 		| FunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode
// 		| FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode
// 		| FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode
// 		| FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode
// 		| FunctionCallUnknownSegmentConcreteSyntaxTreeNode
// 		| FunctionCallUnknownSegmentContentConcreteSyntaxTreeNode
// 		| FunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode
// 		| FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode
// 		| FunctionCallWordSegmentConcreteSyntaxTreeNode
// 		| FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode
// 		| FunctionConcreteSyntaxTreeNode
// 		| FunctionHeaderConcreteSyntaxTreeNode
// 		| FunctionHeaderKnownSegmentConcreteSyntaxTreeNode
// 		| FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode
// 		| FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode
// 		| FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode
// 		| FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode
// 		| FunctionHeaderWordSegmentConcreteSyntaxTreeNode
// 		| FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode
// 		| FunctionsConcreteSyntaxTreeNode
// 		| FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode
// 		| SourceFileContentConcreteSyntaxTreeNode
// 		| WhitespaceConcreteSyntaxTreeNode
// 		| WhitespaceSegmentConcreteSyntaxTreeNode
// 		| WhitespaceSegmentsConcreteSyntaxTreeNode
// 		| StatementsConcreteSyntaxTreeNode
// 		| IdentifierConcreteSyntaxTreeNode
// 		| FunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode
// 		| FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode
// 		| FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode
// 		| FunctionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNode
// 		| FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode
// 		| FunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode
// 		| StatementsRestStatementsConcreteSyntaxTreeNode
// 		| IdentifierSegmentsConcreteSyntaxTreeNode
// 		| OperatorConcreteSyntaxTreeNode
// 		| IdentifierSegmentConcreteSyntaxTreeNode
// 		| null,
// ): number {
// 	if (node === null) {
// 		return 0;
// 	}
// 	switch (node.typeName) {
// 		case blockConcreteSyntaxTreeNodeKindName:
// 		case blockContentConcreteSyntaxTreeNodeKindName:
// 		case functionBodyConcreteSyntaxTreeNodeKindName:
// 		case functionCallConcreteSyntaxTreeNodeKindName:
// 		case functionCallKnownSegmentConcreteSyntaxTreeNodeKindName:
// 		case functionCallKnownSegmentContentConcreteSyntaxTreeNodeKindName:
// 		case functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeKindName:
// 		case functionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeKindName:
// 		case functionCallUnknownSegmentConcreteSyntaxTreeNodeKindName:
// 		case functionCallUnknownSegmentContentConcreteSyntaxTreeNodeKindName:
// 		case functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName:
// 		case functionCallWordSegmentConcreteSyntaxTreeNodeKindName:
// 		case functionCallWordStartingSegmentsConcreteSyntaxTreeNodeKindName:
// 		case functionConcreteSyntaxTreeNodeKindName:
// 		case functionHeaderConcreteSyntaxTreeNodeKindName:
// 		case functionHeaderKnownSegmentConcreteSyntaxTreeNodeKindName:
// 		case functionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeKindName:
// 		case functionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeKindName:
// 		case functionHeaderUnknownSegmentConcreteSyntaxTreeNodeKindName:
// 		case functionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName:
// 		case functionHeaderWordSegmentConcreteSyntaxTreeNodeKindName:
// 		case functionHeaderWordStartingSegmentsConcreteSyntaxTreeNodeKindName:
// 		case functionsConcreteSyntaxTreeNodeKindName:
// 		case functionsSeparatedRestFunctionsConcreteSyntaxTreeNodeKindName:
// 		case sourceFileContentConcreteSyntaxTreeNodeKindName:
// 		case whitespaceConcreteSyntaxTreeNodeKindName:
// 		case whitespaceSegmentsConcreteSyntaxTreeNodeKindName:
// 		case identifierConcreteSyntaxTreeNodeKindName:
// 		case statementsConcreteSyntaxTreeNodeKindName:
// 		case functionHeaderUnknownSegmentContentConcreteSyntaxTreeNodeKindName:
// 		case statementsRestStatementsConcreteSyntaxTreeNodeKindName:
// 		case identifierSegmentsConcreteSyntaxTreeNodeKindName: {
// 			const childDepths: readonly number[] = node.children.map(computeDepth);
// 			const maximalChildDepth = Math.max(...childDepths);
// 			return maximalChildDepth + 1;
// 		}
// 		case blockOpeningBracketConcreteSyntaxTreeNodeKindName:
// 		case blockClosingBracketConcreteSyntaxTreeNodeKindName:
// 		case functionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName:
// 		case functionCallKnownSegmentClosingBracketConcreteSyntaxTreeNodeKindName:
// 		case functionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNodeKindName:
// 		case functionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName:
// 		case whitespaceSegmentConcreteSyntaxTreeNodeKindName:
// 		case functionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName:
// 		case functionHeaderKnownSegmentContentConcreteSyntaxTreeNodeKindName:
// 		case functionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNodeKindName:
// 		case operatorConcreteSyntaxTreeNodeKindName:
// 		case identifierSegmentConcreteSyntaxTreeNodeKindName:
// 		case functionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNodeKindName:
// 		case functionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNodeKindName: {
// 			return 1;
// 		}
// 	}
// }
