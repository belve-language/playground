import type {BlockClosingBracketConcreteSyntaxTreeNode} from "./kinds/block-closing-bracket/BlockClosingBracketConcreteSyntaxTreeNode.ts";
import type {BlockContentConcreteSyntaxTreeNode} from "./kinds/block-content/BlockContentConcreteSyntaxTreeNode.ts";
import type {BlockOpeningBracketConcreteSyntaxTreeNode} from "./kinds/block-opening-bracket/BlockOpeningBracketConcreteSyntaxTreeNode.ts";
import type {BlockConcreteSyntaxTreeNode} from "./kinds/block/BlockConcreteSyntaxTreeNode.ts";
import type {FunctionBodyConcreteSyntaxTreeNode} from "./kinds/function-body/FunctionBodyConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode} from "./kinds/function-call-known-segment-closing-bracket/FunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentContentConcreteSyntaxTreeNode} from "./kinds/function-call-known-segment-content/FunctionCallKnownSegmentContentConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode} from "./kinds/function-call-known-segment-opening-bracket/FunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentConcreteSyntaxTreeNode} from "./kinds/function-call-known-segment/FunctionCallKnownSegmentConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode} from "./kinds/function-call-known-starting-segments/FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "./kinds/function-call-segments-separated-rest-segments/FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode} from "./kinds/function-call-unknown-segment-closing-bracket/FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentContentConcreteSyntaxTreeNode} from "./kinds/function-call-unknown-segment-content/FunctionCallUnknownSegmentContentConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode} from "./kinds/function-call-unknown-segment-opening-bracket/FunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentConcreteSyntaxTreeNode} from "./kinds/function-call-unknown-segment/FunctionCallUnknownSegmentConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode} from "./kinds/function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentConcreteSyntaxTreeNode} from "./kinds/function-call-word-segment/FunctionCallWordSegmentConcreteSyntaxTreeNode.ts";
import type {FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode} from "./kinds/function-call-word-starting-segments/FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallConcreteSyntaxTreeNode} from "./kinds/function-call/FunctionCallConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode} from "./kinds/function-header-known-segment-closing-bracket/FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode} from "./kinds/function-header-known-segment-content/FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode} from "./kinds/function-header-known-segment-opening-bracket/FunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentConcreteSyntaxTreeNode} from "./kinds/function-header-known-segment/FunctionHeaderKnownSegmentConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode} from "./kinds/function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "./kinds/function-header-segments-separated-rest-segments/FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode} from "./kinds/function-header-unknown-segment-closing-bracket/FunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode} from "./kinds/function-header-unknown-segment-content/FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNode} from "./kinds/function-header-unknown-segment-opening-bracket/FunctionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode} from "./kinds/function-header-unknown-segment/FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode} from "./kinds/function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderWordSegmentConcreteSyntaxTreeNode} from "./kinds/function-header-word-segment/FunctionHeaderWordSegmentConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode} from "./kinds/function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderConcreteSyntaxTreeNode} from "./kinds/function-header/FunctionHeaderConcreteSyntaxTreeNode.ts";
import type {FunctionConcreteSyntaxTreeNode} from "./kinds/function/FunctionConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "./kinds/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "./kinds/functions/FunctionsConcreteSyntaxTreeNode.ts";
import type {IdentifierSegmentConcreteSyntaxTreeNode} from "./kinds/identifier-segment/IdentifierSegmentConcreteSyntaxTreeNode.ts";
import type {IdentifierSegmentsConcreteSyntaxTreeNode} from "./kinds/identifier-segments/IdentifierSegmentsConcreteSyntaxTreeNode.ts";
import type {IdentifierConcreteSyntaxTreeNode} from "./kinds/identifier/IdentifierConcreteSyntaxTreeNode.ts";
import type {OperatorConcreteSyntaxTreeNode} from "./kinds/operator/OperatorConcreteSyntaxTreeNode.ts";
import type {SourceFileContentConcreteSyntaxTreeNode} from "./kinds/source-file-content/SourceFileContentConcreteSyntaxTreeNode.ts";
import type {StatementsRestStatementsConcreteSyntaxTreeNode} from "./kinds/statements-rest-statements/StatementsRestStatementsConcreteSyntaxTreeNode.ts";
import type {StatementsConcreteSyntaxTreeNode} from "./kinds/statements/StatementsConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentConcreteSyntaxTreeNode} from "./kinds/whitespace-segment/WhitespaceSegmentConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNode} from "./kinds/whitespace-segments/WhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "./kinds/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
export type SupportedConcreteSyntaxTreeNode =
	| BlockConcreteSyntaxTreeNode
	| BlockContentConcreteSyntaxTreeNode
	| FunctionBodyConcreteSyntaxTreeNode
	| FunctionCallConcreteSyntaxTreeNode
	| FunctionCallKnownSegmentConcreteSyntaxTreeNode
	| FunctionCallKnownSegmentContentConcreteSyntaxTreeNode
	| FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode
	| FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode
	| FunctionCallUnknownSegmentConcreteSyntaxTreeNode
	| FunctionCallUnknownSegmentContentConcreteSyntaxTreeNode
	| FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode
	| FunctionCallWordSegmentConcreteSyntaxTreeNode
	| FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode
	| FunctionConcreteSyntaxTreeNode
	| FunctionHeaderConcreteSyntaxTreeNode
	| FunctionHeaderKnownSegmentConcreteSyntaxTreeNode
	| FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode
	| FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode
	| FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode
	| FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode
	| FunctionHeaderWordSegmentConcreteSyntaxTreeNode
	| FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode
	| FunctionsConcreteSyntaxTreeNode
	| FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode
	| SourceFileContentConcreteSyntaxTreeNode
	| WhitespaceConcreteSyntaxTreeNode
	| WhitespaceSegmentsConcreteSyntaxTreeNode
	| StatementsConcreteSyntaxTreeNode
	| IdentifierConcreteSyntaxTreeNode
	| FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode
	| FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode
	| StatementsRestStatementsConcreteSyntaxTreeNode
	| IdentifierSegmentsConcreteSyntaxTreeNode
	| BlockOpeningBracketConcreteSyntaxTreeNode
	| BlockClosingBracketConcreteSyntaxTreeNode
	| FunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode
	| FunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode
	| FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode
	| FunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode
	| WhitespaceSegmentConcreteSyntaxTreeNode
	| FunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode
	| FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode
	| FunctionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNode
	| FunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode
	| IdentifierSegmentConcreteSyntaxTreeNode
	| OperatorConcreteSyntaxTreeNode;
