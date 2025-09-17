import {successExpressionParsingResultTypeName} from "./type-name/successExpressionParsingResultTypeName.ts";
import type {Atom} from "../../../atom/Atom.ts";
import type {Character} from "../../../character/Character.ts";
import {ParsingResult} from "../../../parsing-result/ParsingResult.ts";
export class SuccessExpressionParsingResult<
	AtomToUse extends Atom,
> extends ParsingResult<typeof successExpressionParsingResultTypeName> {
	public constructor(
		atom: AtomToUse,
		nextIndex: number,
		remainingCharacters: readonly Character[],
	) {
		super(successExpressionParsingResultTypeName);
		this.atom = atom;
		this.nextIndex = nextIndex;
		this.remainingCharacters = remainingCharacters;
	}
	public readonly atom: AtomToUse;
	public readonly nextIndex: number;
	public readonly remainingCharacters: readonly Character[];
}
