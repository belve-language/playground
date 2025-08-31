import type {Expression} from "./expression/Expression.ts";
export type RuleRightExpressions = readonly [
	Expression<string>,
	...(readonly Expression<string>[]),
];
