import type {Rules} from "../../../Rules.ts";
import type {StackItem} from "../../../stack-item/StackItem.ts";
import {Expression} from "../../Expression.ts";
export class EmptyExpression extends Expression<"empty"> {
	public constructor() {
		super("empty");
	}
	public override checkIfGivenNonTerminalCanBeFinalInThisExpression(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		nonTerminal: string,
		rules: Rules,
	): boolean {
		return false;
	}
	public override checkIfThisExpressionCanBeEmpty(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		rules: Rules,
	): boolean {
		return true;
	}
	public override computePossibleFirstingTerminalsOfThisExpression(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		rules: Rules,
	): ReadonlySet<string> {
		return new Set<string>();
	}
	public override computePossibleFollowingTerminalsOfGivenNonTerminalInThisExpression(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		nonTerminal: string,
		rules: Rules,
	): ReadonlySet<string> {
		return new Set<string>();
	}
	public override computeStackItems(): readonly StackItem[] {
		return [];
	}
	public override computeUniqueUsedNonTerminalsInThisExpression(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		rules: Rules,
	): ReadonlySet<string> {
		return new Set<string>();
	}
}
