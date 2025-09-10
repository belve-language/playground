import {Grammar} from "../../core/grammar/Grammar.ts";
import {ruleById} from "../rule-by-id/ruleById.ts";
export const grammar = new Grammar(ruleById, ruleById.OptionalContent);
