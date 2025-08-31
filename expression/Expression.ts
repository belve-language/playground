import type {FirstSet} from "../FirstSet.ts";
import type {RuleByNonTerminal} from "../RuleByNonTerminal.ts";
import type {StackItem} from "../stack-item/StackItem.ts";
export abstract class Expression<TypeName extends string> {
	public constructor(typeName: TypeName) {
		this.typeName = typeName;
	}
	public abstract checkIfGivenNonTerminalCanBeFinalInThisExpression(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		nonTerminal: string,
		ruleByNonTerminal: RuleByNonTerminal,
	): boolean;
	public abstract checkIfThisExpressionCanBeEmpty(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		ruleByNonTerminal: RuleByNonTerminal,
	): boolean;
	public computeFirstSet(ruleByNonTerminal: RuleByNonTerminal): FirstSet {
		return {
			canBeEmpty: this.checkIfThisExpressionCanBeEmpty(
				new Set<string>(),
				ruleByNonTerminal,
			),
			terminals: this.computePossibleFirstingTerminalsOfThisExpression(
				new Set<string>(),
				ruleByNonTerminal,
			),
		};
	}
	public abstract computePossibleFirstingTerminalsOfThisExpression(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		ruleByNonTerminal: RuleByNonTerminal,
	): ReadonlySet<string>;
	public abstract computePossibleFollowingTerminalsOfGivenNonTerminalInThisExpression(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		nonTerminal: string,
		ruleByNonTerminal: RuleByNonTerminal,
	): ReadonlySet<string>;
	public abstract computeStackItems(): readonly StackItem[];
	public abstract computeUniqueUsedNonTerminalsInThisExpression(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		ruleByNonTerminal: RuleByNonTerminal,
	): ReadonlySet<string>;
	public readonly typeName: TypeName;
}
