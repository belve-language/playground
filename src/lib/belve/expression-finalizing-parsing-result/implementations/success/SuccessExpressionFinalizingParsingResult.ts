import {successExpressionFinalizingParsingResultTypeName} from "./type-name/successExpressionFinalizingParsingResultTypeName.ts";
import type {Atom} from "../../../atom/Atom.ts";
import {ExpressionFinalizingParsingResult} from "../../ExpressionFinalizingParsingResult.ts";
export class SuccessExpressionFinalizingParsingResult<
	AtomToUse extends Atom,
> extends ExpressionFinalizingParsingResult<
	typeof successExpressionFinalizingParsingResultTypeName
> {
	public constructor(atom: AtomToUse) {
		super(successExpressionFinalizingParsingResultTypeName);
		this.atom = atom;
	}
	public readonly atom: AtomToUse;
}
