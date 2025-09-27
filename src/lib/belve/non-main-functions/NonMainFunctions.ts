import type {Function} from "../function/Function.ts";
export type NonMainFunctions<FunctionToUse extends Function> = {
	readonly [id: string]: FunctionToUse;
};
