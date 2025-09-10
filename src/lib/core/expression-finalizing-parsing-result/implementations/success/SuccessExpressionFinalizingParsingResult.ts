import {successExpressionFinalizingParsingResultTypeName} from "./type-name/successExpressionFinalizingParsingResultTypeName.ts";
import type {Atom} from "../../../atom/Atom.ts";
import {ParsingResult} from "../../../parsing-result/ParsingResult.ts";
export class SuccessExpressionFinalizingParsingResult<
	AtomToUse extends Atom,
> extends ParsingResult<
	typeof successExpressionFinalizingParsingResultTypeName
> {
	public constructor(atom: AtomToUse) {
		super(successExpressionFinalizingParsingResultTypeName);
		this.atom = atom;
	}
	public readonly atom: AtomToUse;
}
