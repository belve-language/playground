import {Expression} from "../../Expression.ts";
export abstract class ThenExpression<
	SubTypeName extends string,
> extends Expression<`${SubTypeName}Then`> {
	public constructor(subTypeName: SubTypeName) {
		super(`${subTypeName}Then`);
	}
}
