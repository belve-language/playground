import type {BlockAbstractSyntaxTreeNode} from "./kinds/block/BlockAbstractSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentAbstractSyntaxTreeNode} from "./kinds/function-call-unknown-segment/FunctionCallUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderWordSegmentAbstractSyntaxTreeNode} from "./kinds/function-header-word-segment/FunctionHeaderWordSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionAbstractSyntaxTreeNode} from "./kinds/function/FunctionAbstractSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentAbstractSyntaxTreeNode} from "./kinds/function-call-word-segment/FunctionCallWordSegmentAbstractSyntaxTreeNode.ts";
import type {IdentifierAbstractSyntaxTreeNode} from "./kinds/identifier/IdentifierAbstractSyntaxTreeNode.ts";
import type {FunctionBodyAbstractSyntaxTreeNode} from "./kinds/function-body/FunctionBodyAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "./kinds/function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import type {OperatedStatementAbstractSyntaxTreeNode} from "./kinds/operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
import type {FunctionCallAbstractSyntaxTreeNode} from "./kinds/function-call/FunctionCallAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentAbstractSyntaxTreeNode} from "./kinds/function-header-known-segment/FunctionHeaderKnownSegmentAbstractSyntaxTreeNode.ts";
import type {OperatorAbstractSyntaxTreeNode} from "./kinds/operator/OperatorAbstractSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentAbstractSyntaxTreeNode} from "./kinds/function-call-known-segment/FunctionCallKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode} from "./kinds/function-header-unknown-segment/FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {SourceFileContentAbstractSyntaxTreeNode} from "./kinds/source-file-content/SourceFileContentAbstractSyntaxTreeNode.ts";
export type SupportedAbstractSyntaxTreeNode =
	| BlockAbstractSyntaxTreeNode
	| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
	| FunctionHeaderWordSegmentAbstractSyntaxTreeNode
	| FunctionAbstractSyntaxTreeNode
	| FunctionCallWordSegmentAbstractSyntaxTreeNode
	| IdentifierAbstractSyntaxTreeNode
	| FunctionBodyAbstractSyntaxTreeNode
	| FunctionHeaderAbstractSyntaxTreeNode
	| OperatedStatementAbstractSyntaxTreeNode
	| FunctionCallAbstractSyntaxTreeNode
	| FunctionHeaderKnownSegmentAbstractSyntaxTreeNode
	| OperatorAbstractSyntaxTreeNode
	| FunctionCallKnownSegmentAbstractSyntaxTreeNode
	| FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode
	| SourceFileContentAbstractSyntaxTreeNode;
