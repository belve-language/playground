import type {Atom} from "../../atom/Atom.ts";
import type {ConcreteSyntaxTreeNode} from "../../concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
import type {SuccessRuleParsingResult} from "../implementations/success/SuccessRuleParsingResult.ts";
import type {UnexpectedCharacterRuleParsingResult} from "../implementations/unexpected-character/UnexpectedCharacterRuleParsingResult.ts";
import type {UnexpectedFinalizingRuleParsingResult} from "../implementations/unexpected-finalizing/UnexpectedFinalizingRuleParsingResult.ts";
export type SupportedRuleParsingResult<
	NodeToUse extends ConcreteSyntaxTreeNode<Atom>,
> =
	| SuccessRuleParsingResult<NodeToUse>
	| UnexpectedCharacterRuleParsingResult
	| UnexpectedFinalizingRuleParsingResult;
