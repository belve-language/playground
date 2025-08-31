import type {RuleByNonTerminal} from "../../../RuleByNonTerminal.ts";
import type {StackItem} from "../../../stack-item/StackItem.ts";
import {Expression} from "../../Expression.ts";
import {NonTerminalExpression} from "../non-terminal/NonTerminalExpression.ts";
import type {TerminalExpression} from "../terminal/TerminalExpression.ts";
export class ThenExpression extends Expression<"then"> {
	private constructor(
		leftExpression: NonTerminalExpression | TerminalExpression,
		rightExpression:
			| NonTerminalExpression
			| TerminalExpression
			| ThenExpression,
	) {
		super("then");
		this.leftExpression = leftExpression;
		this.rightExpression = rightExpression;
	}
	public override checkIfGivenNonTerminalCanBeFinalInThisExpression(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		nonTerminal: string,
		ruleByNonTerminal: RuleByNonTerminal,
	): boolean {
		return (
			this.rightExpression.checkIfGivenNonTerminalCanBeFinalInThisExpression(
				alreadyCheckedNonTerminals,
				nonTerminal,
				ruleByNonTerminal,
			)
			|| (this.rightExpression.checkIfThisExpressionCanBeEmpty(
				new Set<string>(),
				ruleByNonTerminal,
			)
				&& this.leftExpression.checkIfGivenNonTerminalCanBeFinalInThisExpression(
					alreadyCheckedNonTerminals,
					nonTerminal,
					ruleByNonTerminal,
				))
		);
	}
	public override checkIfThisExpressionCanBeEmpty(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		ruleByNonTerminal: RuleByNonTerminal,
	): boolean {
		return (
			this.leftExpression.checkIfThisExpressionCanBeEmpty(
				alreadyCheckedNonTerminals,
				ruleByNonTerminal,
			)
			&& this.rightExpression.checkIfThisExpressionCanBeEmpty(
				alreadyCheckedNonTerminals,
				ruleByNonTerminal,
			)
		);
	}
	public override computePossibleFirstingTerminalsOfThisExpression(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		ruleByNonTerminal: RuleByNonTerminal,
	): ReadonlySet<string> {
		const leftExpressionFirstingTerminals =
			this.leftExpression.computePossibleFirstingTerminalsOfThisExpression(
				alreadyCheckedNonTerminals,
				ruleByNonTerminal,
			);
		if (
			this.leftExpression.checkIfThisExpressionCanBeEmpty(
				new Set<string>(),
				ruleByNonTerminal,
			)
		) {
			const rightExpressionFirstingTerminals =
				this.rightExpression.computePossibleFirstingTerminalsOfThisExpression(
					alreadyCheckedNonTerminals,
					ruleByNonTerminal,
				);
			return leftExpressionFirstingTerminals.union(
				rightExpressionFirstingTerminals,
			);
		} else {
			return leftExpressionFirstingTerminals;
		}
	}
	public override computePossibleFollowingTerminalsOfGivenNonTerminalInThisExpression(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		nonTerminal: string,
		ruleByNonTerminal: RuleByNonTerminal,
	): ReadonlySet<string> {
		const possibleFollowingTerminalsOfGivenNonTerminalInLeftExpression =
			this.leftExpression.computePossibleFollowingTerminalsOfGivenNonTerminalInThisExpression(
				alreadyCheckedNonTerminals,
				nonTerminal,
				ruleByNonTerminal,
			);
		const possibleFollowingTerminalsOfGivenNonTerminalInRightExpression =
			this.rightExpression.computePossibleFollowingTerminalsOfGivenNonTerminalInThisExpression(
				alreadyCheckedNonTerminals,
				nonTerminal,
				ruleByNonTerminal,
			);
		const possibleFollowingTerminalsOfGivenNonTerminalInSubExpressions =
			possibleFollowingTerminalsOfGivenNonTerminalInLeftExpression.union(
				possibleFollowingTerminalsOfGivenNonTerminalInRightExpression,
			);
		if (
			this.leftExpression.checkIfGivenNonTerminalCanBeFinalInThisExpression(
				new Set<string>(),
				nonTerminal,
				ruleByNonTerminal,
			)
		) {
			const possibleFirstingTerminalsOfRightExpression =
				this.rightExpression.computePossibleFirstingTerminalsOfThisExpression(
					alreadyCheckedNonTerminals,
					ruleByNonTerminal,
				);
			const possibleFollowingTerminalsOfGivenNonTerminalInThisExpression =
				possibleFollowingTerminalsOfGivenNonTerminalInSubExpressions.union(
					possibleFirstingTerminalsOfRightExpression,
				);
			return possibleFollowingTerminalsOfGivenNonTerminalInThisExpression;
		} else {
			return possibleFollowingTerminalsOfGivenNonTerminalInSubExpressions;
		}
	}
	public override computeStackItems(): readonly StackItem[] {
		return [
			...this.leftExpression.computeStackItems(),
			...this.rightExpression.computeStackItems(),
		];
	}
	public override computeUniqueUsedNonTerminalsInThisExpression(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		ruleByNonTerminal: RuleByNonTerminal,
	): ReadonlySet<string> {
		const uniqueUsedNonTerminalsInLeftExpression =
			this.leftExpression.computeUniqueUsedNonTerminalsInThisExpression(
				alreadyCheckedNonTerminals,
				ruleByNonTerminal,
			);
		const uniqueUsedNonTerminalsInRightExpression =
			this.rightExpression.computeUniqueUsedNonTerminalsInThisExpression(
				alreadyCheckedNonTerminals,
				ruleByNonTerminal,
			);
		return uniqueUsedNonTerminalsInLeftExpression.union(
			uniqueUsedNonTerminalsInRightExpression,
		);
	}
	public static createFromArray(
		expressions: readonly [
			NonTerminalExpression | TerminalExpression,
			NonTerminalExpression | TerminalExpression,
			...(readonly (NonTerminalExpression | TerminalExpression)[]),
		],
	): ThenExpression {
		const [
			firstExpression,
			secondExpression,
			thirdExpression,
			...restExpressions
		] = expressions;
		if (thirdExpression === undefined) {
			return new ThenExpression(firstExpression, secondExpression);
		} else {
			return new ThenExpression(
				firstExpression,
				ThenExpression.createFromArray([
					secondExpression,
					thirdExpression,
					...restExpressions,
				]),
			);
		}
	}
	public readonly leftExpression: NonTerminalExpression | TerminalExpression;
	public readonly rightExpression:
		| NonTerminalExpression
		| TerminalExpression
		| ThenExpression;
}
