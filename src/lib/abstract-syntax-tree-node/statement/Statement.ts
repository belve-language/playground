import type {FunctionAbstractSyntaxTreeNodeDataFunctions} from "../implementations/functions/data/functions/FunctionAbstractSyntaxTreeNodeDataFunctions.ts";
export interface Statement {
	execute(
		functions: FunctionAbstractSyntaxTreeNodeDataFunctions,
		knownsStack: readonly [
			{readonly [variableName: string]: unknown},
			...(readonly {readonly [variableName: string]: unknown}[]),
		],
	): null | {readonly [variableName: string]: unknown};
}
