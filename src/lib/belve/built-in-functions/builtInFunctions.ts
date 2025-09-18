import type {NonMainFunctions} from "../non-main-functions/NonMainFunctions.ts";
import {AdditionFunction} from "./functions/addition/AdditionFunction.ts";
import {AssemblingPairFunction} from "./functions/assembling-pair/AssemblingPairFunction.ts";
import {AssigningFunction} from "./functions/assigning/AssigningFunction.ts";
import {DisassemblingPairFunction} from "./functions/disassembling-pair/DisassemblingPairFunction.ts";
import {DivisionFunction} from "./functions/division/DivisionFunction.ts";
import {EqualFunction} from "./functions/equal/EqualFunction.ts";
import {GreaterThanFunction} from "./functions/greater-than/GreaterThanFunction.ts";
import {GreaterThanOrEqualFunction} from "./functions/greater-than-or-equal/GreaterThanOrEqualFunction.ts";
import {IsNotPairFunction} from "./functions/is-not-pair/IsNotPairFunction.ts";
import {IsPairFunction} from "./functions/is-pair/IsPairFunction.ts";
import {LessThanFunction} from "./functions/less-than/LessThanFunction.ts";
import {LessThanOrEqualFunction} from "./functions/less-than-or-equal/LessThanOrEqualFunction.ts";
import {ModuloFunction} from "./functions/modulo/ModuloFunction.ts";
import {MultiplicationFunction} from "./functions/multiplication/MultiplicationFunction.ts";
import {NotEqualFunction} from "./functions/not-equal/NotEqualFunction.ts";
import {PowerFunction} from "./functions/power/PowerFunction.ts";
import {SubtractionFunction} from "./functions/subtraction/SubtractionFunction.ts";
export const builtInFunctions = {
	"() != ()": new NotEqualFunction(),
	"() % () = []": new ModuloFunction(),
	"() * () = []": new MultiplicationFunction(),
	"() + () = []": new AdditionFunction(),
	"() - () = []": new SubtractionFunction(),
	"() / () = []": new DivisionFunction(),
	"() < ()": new LessThanFunction(),
	"() <= ()": new LessThanOrEqualFunction(),
	"() = ()": new EqualFunction(),
	"() = []": new AssigningFunction(),
	"() > ()": new GreaterThanFunction(),
	"() >= ()": new GreaterThanOrEqualFunction(),
	"() ^ () = []": new PowerFunction(),
	"is () pair": new IsPairFunction(),
	"is not () pair": new IsNotPairFunction(),
	"pair of () and () is []": new AssemblingPairFunction(),
	"pair of [] and [] is ()": new DisassemblingPairFunction(),
	// } as const as NonMainFunctions;
} as unknown as NonMainFunctions;
// TODO
