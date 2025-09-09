import type {Atom} from "../../atom/Atom.ts";
import type {SuccessExpressionParsingResult} from "../implementations/success/SuccessExpressionParsingResult.ts";
import type {UnexpectedCharacterExpressionParsingResult} from "../implementations/unexpected-character/UnexpectedCharacterExpressionParsingResult.ts";
export type SupportedExpressionParsingResult<AtomToUse extends Atom> =
	| SuccessExpressionParsingResult<AtomToUse>
	| UnexpectedCharacterExpressionParsingResult;
