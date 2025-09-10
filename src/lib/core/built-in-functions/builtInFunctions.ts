import type {Function} from "../function/Function.ts";
import {ReturnFunctionCallingResult} from "../function-calling-result/implementations/return/ReturnFunctionCallingResult.ts";
import type {Functions} from "../functions/Functions.ts";
class GreaterThanFunction implements Function {
	public constructor() {}
	public *call(
		functions: Functions,
		knownsValues: readonly [number, number],
	): Generator<ReturnFunctionCallingResult, void, void> {
		if (knownsValues[0] > knownsValues[1]) {
			yield new ReturnFunctionCallingResult([], {});
		}
	}
}
class LessThanFunction implements Function {
	public constructor() {}
	public *call(
		functions: Functions,
		knownsValues: readonly [number, number],
	): Generator<ReturnFunctionCallingResult, void, void> {
		if (knownsValues[0] < knownsValues[1]) {
			yield new ReturnFunctionCallingResult([], {});
		}
	}
}
class GreaterThanOrEqualFunction implements Function {
	public constructor() {}
	public *call(
		functions: Functions,
		knownsValues: readonly [number, number],
	): Generator<ReturnFunctionCallingResult, void, void> {
		if (knownsValues[0] >= knownsValues[1]) {
			yield new ReturnFunctionCallingResult([], {});
		}
	}
}
class LessThanOrEqualFunction implements Function {
	public constructor() {}
	public *call(
		functions: Functions,
		knownsValues: readonly [number, number],
	): Generator<ReturnFunctionCallingResult, void, void> {
		if (knownsValues[0] <= knownsValues[1]) {
			yield new ReturnFunctionCallingResult([], {});
		}
	}
}
class EqualFunction implements Function {
	public constructor() {}
	public *call(
		functions: Functions,
		knownsValues: readonly [unknown, unknown],
	): Generator<ReturnFunctionCallingResult, void, void> {
		if (knownsValues[0] === knownsValues[1]) {
			yield new ReturnFunctionCallingResult([], {});
		}
	}
}
class AdditionFunction implements Function {
	public constructor() {}
	public *call(
		functions: Functions,
		knownsValues: readonly [number, number],
	): Generator<ReturnFunctionCallingResult, void, void> {
		const [number1, number2] = knownsValues;
		yield new ReturnFunctionCallingResult([number1 + number2], {});
	}
}
class SubtractionFunction implements Function {
	public constructor() {}
	public *call(
		functions: Functions,
		knownsValues: readonly [number, number],
	): Generator<ReturnFunctionCallingResult, void, void> {
		const [number1, number2] = knownsValues;
		yield new ReturnFunctionCallingResult([number1 - number2], {});
	}
}
class ModulusFunction implements Function {
	public constructor() {}
	public *call(
		functions: Functions,
		knownsValues: readonly [number, number],
	): Generator<ReturnFunctionCallingResult, void, void> {
		const [number1, number2] = knownsValues;
		yield new ReturnFunctionCallingResult([number1 % number2], {});
	}
}
class IsPairFunction implements Function {
	public constructor() {}
	public *call(
		functions: Functions,
		knownsValues: readonly [unknown],
	): Generator<ReturnFunctionCallingResult, void, void> {
		const [value] = knownsValues;
		if (Array.isArray(value)) {
			yield new ReturnFunctionCallingResult([], {});
		}
	}
}
class IsNotPairFunction implements Function {
	public constructor() {}
	public *call(
		functions: Functions,
		knownsValues: readonly [unknown],
	): Generator<ReturnFunctionCallingResult, void, void> {
		const [value] = knownsValues;
		if (!Array.isArray(value)) {
			yield new ReturnFunctionCallingResult([], {});
		}
	}
}
class AssemblingPairFunction implements Function {
	public constructor() {}
	public *call(
		functions: Functions,
		knownsValues: readonly [unknown, unknown],
	): Generator<ReturnFunctionCallingResult, void, void> {
		const [firstElement, secondElement] = knownsValues;
		yield new ReturnFunctionCallingResult([[firstElement, secondElement]], {});
	}
}
class DisassemblingPairFunction implements Function {
	public constructor() {}
	public *call(
		functions: Functions,
		knownsValues: readonly [readonly [unknown, unknown]],
	): Generator<ReturnFunctionCallingResult, void, void> {
		const [[firstElement, secondElement]] = knownsValues;
		yield new ReturnFunctionCallingResult([firstElement, secondElement], {});
	}
}
class NotEqualFunction implements Function {
	public constructor() {}
	public *call(
		functions: Functions,
		knownsValues: readonly [unknown, unknown],
	): Generator<ReturnFunctionCallingResult, void, void> {
		if (knownsValues[0] !== knownsValues[1]) {
			yield new ReturnFunctionCallingResult([], {});
		}
	}
}
class PowerFunction implements Function {
	public constructor() {}
	public *call(
		functions: Functions,
		knownsValues: readonly [number, number],
	): Generator<ReturnFunctionCallingResult, void, void> {
		const [base, exponent] = knownsValues;
		yield new ReturnFunctionCallingResult([base ** exponent], {});
	}
}
class AssigningFunction implements Function {
	public constructor() {}
	public *call(
		functions: Functions,
		knownsValues: readonly [unknown],
	): Generator<ReturnFunctionCallingResult, void, void> {
		const [value] = knownsValues;
		yield new ReturnFunctionCallingResult([value], {});
	}
}
class MultiplicationFunction implements Function {
	public constructor() {}
	public *call(
		functions: Functions,
		knownsValues: readonly [number, number],
	): Generator<ReturnFunctionCallingResult, void, void> {
		const [number1, number2] = knownsValues;
		yield new ReturnFunctionCallingResult([number1 * number2], {});
	}
}
// TODO SPLIT INTO FILES
export const builtInFunctions = {
	"() != ()": new NotEqualFunction(),
	"() % () = []": new ModulusFunction(),
	"() * () = []": new MultiplicationFunction(),
	"() + () = []": new AdditionFunction(),
	"() - () = []": new SubtractionFunction(),
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
} as const satisfies Functions;
