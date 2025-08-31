import type {NonTerminalExpression} from "../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {TerminalExpression} from "../expression/implementations/terminal/TerminalExpression.ts";
export type StackItem = NonTerminalExpression | TerminalExpression;
