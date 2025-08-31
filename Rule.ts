import type {RuleRightExpressions} from "./RuleRightExpressions.ts";
export type Rule = {
	readonly leftNonTerminal: string;
	readonly rightExpressions: RuleRightExpressions;
};
