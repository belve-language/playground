import type {Atom} from "../../atom/Atom.ts";
import type {ConcreteSyntaxTreeNode} from "../../concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
import type {ExtraCharactersParsingResult} from "../implementations/extra-characters/ExtraCharactersParsingResult.ts";
import type {SuccessParsingResult} from "../implementations/success/SuccessParsingResult.ts";
import type {UnexpectedCharacterParsingResult} from "../implementations/unexpected-character/UnexpectedCharacterParsingResult.ts";
import type {UnexpectedFinalizingParsingResult} from "../implementations/unexpected-finalizing/UnexpectedFinalizingParsingResult.ts";
export type SupportedParsingResult<
	NodeToUse extends ConcreteSyntaxTreeNode<Atom>,
> =
	| ExtraCharactersParsingResult
	| SuccessParsingResult<NodeToUse>
	| UnexpectedCharacterParsingResult
	| UnexpectedFinalizingParsingResult;
