import type {RuleByNonTerminal} from "../../../RuleByNonTerminal.ts";
import type {StackItem} from "../../../stack-item/StackItem.ts";
import {Expression} from "../../Expression.ts";
export class TerminalExpression extends Expression<"terminal"> {
	public constructor(terminal: string) {
		super("terminal");
		this.terminal = terminal;
	}
	public override checkIfGivenNonTerminalCanBeFinalInThisExpression(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		nonTerminal: string,
		ruleByNonTerminal: RuleByNonTerminal,
	): boolean {
		return false;
	}
	public override checkIfThisExpressionCanBeEmpty(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		ruleByNonTerminal: RuleByNonTerminal,
	): boolean {
		return false;
	}
	public override computePossibleFirstingTerminalsOfThisExpression(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		ruleByNonTerminal: RuleByNonTerminal,
	): ReadonlySet<string> {
		return new Set<string>([this.terminal]);
	}
	public override computePossibleFollowingTerminalsOfGivenNonTerminalInThisExpression(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		nonTerminal: string,
		ruleByNonTerminal: RuleByNonTerminal,
	): ReadonlySet<string> {
		return new Set<string>();
	}
	public override computeStackItems(): readonly StackItem[] {
		return [this];
	}
	public override computeUniqueUsedNonTerminalsInThisExpression(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		ruleByNonTerminal: RuleByNonTerminal,
	): ReadonlySet<string> {
		return new Set<string>();
	}
	public readonly terminal: string;
}
