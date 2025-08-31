import type {Expression} from "./expression/Expression.ts";
export class Rule {
	public constructor(
		leftNonTerminal: string,
		rightExpressions: readonly [
			Expression<string>,
			...(readonly Expression<string>[]),
		],
	) {
		this.leftNonTerminal = leftNonTerminal;
		this.rightExpressions = rightExpressions;
	}
	public readonly leftNonTerminal: string;
	public readonly rightExpressions: readonly [
		Expression<string>,
		...(readonly Expression<string>[]),
	];
}
