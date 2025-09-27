import type {NonMainFunctions} from "../../belve/non-main-functions/NonMainFunctions.ts";
import type {BuiltInFunction} from "../../playground/built-in-functions/built-in-function/BuiltInFunction.ts";
import {AdditionFunction} from "../../playground/built-in-functions/built-in-function/implementations/addition/AdditionFunction.ts";
import {AssemblingPairFunction} from "../../playground/built-in-functions/built-in-function/implementations/assembling-pair/AssemblingPairFunction.ts";
import {AssigningFunction} from "../../playground/built-in-functions/built-in-function/implementations/assigning/AssigningFunction.ts";
import {DisassemblingPairFunction} from "../../playground/built-in-functions/built-in-function/implementations/disassembling-pair/DisassemblingPairFunction.ts";
import {DivisionFunction} from "../../playground/built-in-functions/built-in-function/implementations/division/DivisionFunction.ts";
import {EqualFunction} from "../../playground/built-in-functions/built-in-function/implementations/equal/EqualFunction.ts";
import {FloorFunction} from "../../playground/built-in-functions/built-in-function/implementations/floor/FloorFunction.ts";
import {GreaterThanFunction} from "../../playground/built-in-functions/built-in-function/implementations/greater-than/GreaterThanFunction.ts";
import {GreaterThanOrEqualFunction} from "../../playground/built-in-functions/built-in-function/implementations/greater-than-or-equal/GreaterThanOrEqualFunction.ts";
import {IsNotPairFunction} from "../../playground/built-in-functions/built-in-function/implementations/is-not-pair/IsNotPairFunction.ts";
import {IsPairFunction} from "../../playground/built-in-functions/built-in-function/implementations/is-pair/IsPairFunction.ts";
import {LessThanFunction} from "../../playground/built-in-functions/built-in-function/implementations/less-than/LessThanFunction.ts";
import {LessThanOrEqualFunction} from "../../playground/built-in-functions/built-in-function/implementations/less-than-or-equal/LessThanOrEqualFunction.ts";
import {ModuloFunction} from "../../playground/built-in-functions/built-in-function/implementations/modulo/ModuloFunction.ts";
import {MultiplicationFunction} from "../../playground/built-in-functions/built-in-function/implementations/multiplication/MultiplicationFunction.ts";
import {NotEqualFunction} from "../../playground/built-in-functions/built-in-function/implementations/not-equal/NotEqualFunction.ts";
import {PowerFunction} from "../../playground/built-in-functions/built-in-function/implementations/power/PowerFunction.ts";
import {SubtractionFunction} from "../../playground/built-in-functions/built-in-function/implementations/subtraction/SubtractionFunction.ts";
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
	"floor of () = []": new FloorFunction(),
	"is () pair": new IsPairFunction(),
	"is not () pair": new IsNotPairFunction(),
	"pair of () and () is []": new AssemblingPairFunction(),
	"pair of [] and [] is ()": new DisassemblingPairFunction(),
} as const satisfies NonMainFunctions<BuiltInFunction>;
