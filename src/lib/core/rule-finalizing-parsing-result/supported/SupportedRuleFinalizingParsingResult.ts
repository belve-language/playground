import type {Atom} from "../../atom/Atom.ts";
import type {ConcreteSyntaxTreeNode} from "../../concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
import type {SuccessRuleFinalizingParsingResult} from "../implementations/success/SuccessRuleFinalizingParsingResult.ts";
import type {UnexpectedFinalizingRuleFinalizingParsingResult} from "../implementations/unexpected-finalizing/UnexpectedFinalizingRuleFinalizingParsingResult.ts";
export type SupportedRuleFinalizingParsingResult<
	NodeToUse extends ConcreteSyntaxTreeNode<Atom>,
> =
	| SuccessRuleFinalizingParsingResult<NodeToUse>
	| UnexpectedFinalizingRuleFinalizingParsingResult;
