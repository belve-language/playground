import type {FirstSet} from "../FirstSet.ts";
import type {Rules} from "../Rules.ts";
import type {StackItem} from "../stack-item/StackItem.ts";
export abstract class Expression<TypeName extends string> {
	public constructor(typeName: TypeName) {
		this.typeName = typeName;
	}
	public abstract checkIfGivenNonTerminalCanBeFinalInThisExpression(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		nonTerminal: string,
		rules: Rules,
	): boolean;
	public abstract checkIfThisExpressionCanBeEmpty(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		rules: Rules,
	): boolean;
	public computeFirstSet(rules: Rules): FirstSet {
		return {
			canBeEmpty: this.checkIfThisExpressionCanBeEmpty(
				new Set<string>(),
				rules,
			),
			terminals: this.computePossibleFirstingTerminalsOfThisExpression(
				new Set<string>(),
				rules,
			),
		};
	}
	public abstract computePossibleFirstingTerminalsOfThisExpression(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		rules: Rules,
	): ReadonlySet<string>;
	public abstract computePossibleFollowingTerminalsOfGivenNonTerminalInThisExpression(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		nonTerminal: string,
		rules: Rules,
	): ReadonlySet<string>;
	public abstract computeStackItems(): readonly StackItem[];
	public abstract computeUniqueUsedNonTerminalsInThisExpression(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		rules: Rules,
	): ReadonlySet<string>;
	public readonly typeName: TypeName;
}
