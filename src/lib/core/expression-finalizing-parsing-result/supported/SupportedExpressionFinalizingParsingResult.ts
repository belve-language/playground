import type {Atom} from "../../atom/Atom.ts";
import type {SuccessExpressionFinalizingParsingResult} from "../implementations/success/SuccessExpressionFinalizingParsingResult.ts";
import type {UnexpectedFinalizingExpressionFinalizingParsingResult} from "../implementations/unexpected-finalizing/UnexpectedFinalizingExpressionFinalizingParsingResult.ts";
export type SupportedExpressionFinalizingParsingResult<AtomToUse extends Atom> =

		| SuccessExpressionFinalizingParsingResult<AtomToUse>
		| UnexpectedFinalizingExpressionFinalizingParsingResult;
