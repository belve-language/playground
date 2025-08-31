import type {Rules} from "../../../Rules.ts";
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
		rules: Rules,
	): boolean {
		return (
			this.rightExpression.checkIfGivenNonTerminalCanBeFinalInThisExpression(
				alreadyCheckedNonTerminals,
				nonTerminal,
				rules,
			)
			|| (this.rightExpression.checkIfThisExpressionCanBeEmpty(
				new Set<string>(),
				rules,
			)
				&& this.leftExpression.checkIfGivenNonTerminalCanBeFinalInThisExpression(
					alreadyCheckedNonTerminals,
					nonTerminal,
					rules,
				))
		);
	}
	public override checkIfThisExpressionCanBeEmpty(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		rules: Rules,
	): boolean {
		return (
			this.leftExpression.checkIfThisExpressionCanBeEmpty(
				alreadyCheckedNonTerminals,
				rules,
			)
			&& this.rightExpression.checkIfThisExpressionCanBeEmpty(
				alreadyCheckedNonTerminals,
				rules,
			)
		);
	}
	public override computePossibleFirstingTerminalsOfThisExpression(
		alreadyCheckedNonTerminals: ReadonlySet<string>,
		rules: Rules,
	): ReadonlySet<string> {
		const leftExpressionFirstingTerminals =
			this.leftExpression.computePossibleFirstingTerminalsOfThisExpression(
				alreadyCheckedNonTerminals,
				rules,
			);
		if (
			this.leftExpression.checkIfThisExpressionCanBeEmpty(
				new Set<string>(),
				rules,
			)
		) {
			const rightExpressionFirstingTerminals =
				this.rightExpression.computePossibleFirstingTerminalsOfThisExpression(
					alreadyCheckedNonTerminals,
					rules,
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
		rules: Rules,
	): ReadonlySet<string> {
		const possibleFollowingTerminalsOfGivenNonTerminalInLeftExpression =
			this.leftExpression.computePossibleFollowingTerminalsOfGivenNonTerminalInThisExpression(
				alreadyCheckedNonTerminals,
				nonTerminal,
				rules,
			);
		const possibleFollowingTerminalsOfGivenNonTerminalInRightExpression =
			this.rightExpression.computePossibleFollowingTerminalsOfGivenNonTerminalInThisExpression(
				alreadyCheckedNonTerminals,
				nonTerminal,
				rules,
			);
		const possibleFollowingTerminalsOfGivenNonTerminalInSubExpressions =
			possibleFollowingTerminalsOfGivenNonTerminalInLeftExpression.union(
				possibleFollowingTerminalsOfGivenNonTerminalInRightExpression,
			);
		if (
			this.leftExpression.checkIfGivenNonTerminalCanBeFinalInThisExpression(
				new Set<string>(),
				nonTerminal,
				rules,
			)
		) {
			const possibleFirstingTerminalsOfRightExpression =
				this.rightExpression.computePossibleFirstingTerminalsOfThisExpression(
					alreadyCheckedNonTerminals,
					rules,
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
		rules: Rules,
	): ReadonlySet<string> {
		const uniqueUsedNonTerminalsInLeftExpression =
			this.leftExpression.computeUniqueUsedNonTerminalsInThisExpression(
				alreadyCheckedNonTerminals,
				rules,
			);
		const uniqueUsedNonTerminalsInRightExpression =
			this.rightExpression.computeUniqueUsedNonTerminalsInThisExpression(
				alreadyCheckedNonTerminals,
				rules,
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
