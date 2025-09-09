import type {Functions} from "../functions/Functions.ts";
export const builtInFunctions = {
	// "() % () != ()": {
	// 	*call(
	// 		functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
	// 		knownsValues: readonly [number, number, number],
	// 	): Generator<
	// 		{
	// 			readonly typeName: "success";
	// 			readonly unknownsValues: readonly unknown[];
	// 		},
	// 		void,
	// 		void
	// 	> {
	// 		if (knownsValues[0] % knownsValues[1] !== knownsValues[2]) {
	// 			yield {typeName: "success", unknownsValues: []};
	// 		}
	// 	},
	// },
	// "() + () = []": {
	// 	*call(
	// 		functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
	// 		knownsValues: readonly [number, number],
	// 	): Generator<
	// 		{
	// 			readonly typeName: "success";
	// 			readonly unknownsValues: readonly [number];
	// 		},
	// 		void,
	// 		void
	// 	> {
	// 		const [number1, number2] = knownsValues;
	// 		yield {typeName: "success", unknownsValues: [number1 + number2]};
	// 	},
	// },
	// "() <= ()": {
	// 	*call(
	// 		functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
	// 		knownsValues: readonly [number, number],
	// 	): Generator<
	// 		{readonly typeName: "success"; readonly unknownsValues: readonly []},
	// 		void,
	// 		void
	// 	> {
	// 		if (knownsValues[0] <= knownsValues[1]) {
	// 			yield {typeName: "success", unknownsValues: []};
	// 		}
	// 	},
	// },
	// // continue refactoring the Generator<X types
	// "() > ()": {
	// 	*call(
	// 		functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
	// 		knownsValues: readonly [number, number],
	// 	): Generator<
	// 		{readonly typeName: "success"; readonly unknownsValues: readonly []},
	// 		void,
	// 		void
	// 	> {
	// 		if (knownsValues[0] > knownsValues[1]) {
	// 			yield {typeName: "success", unknownsValues: []};
	// 		}
	// 	},
	// },
	// "root of degree () of () = []": {
	// 	*call(
	// 		functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
	// 		knownsValues: readonly [number, number],
	// 	): Generator<
	// 		{
	// 			readonly typeName: "success";
	// 			readonly unknownsValues: readonly [number];
	// 		},
	// 		void,
	// 		void
	// 	> {
	// 		const [degree, radicand] = knownsValues;
	// 		yield {typeName: "success", unknownsValues: [radicand ** (1 / degree)]};
	// 	},
	// },
	// "a [] between () and ()": {
	// 	*call(
	// 		functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
	// 		knownsValues: readonly [number, number],
	// 	): Generator<
	// 		{
	// 			readonly typeName: "success";
	// 			readonly unknownsValues: readonly [number];
	// 		},
	// 		void,
	// 		void
	// 	> {
	// 		const [minimalNumber, maximalNumber] = knownsValues;
	// 		for (
	// 			let number = minimalNumber;
	// 			number <= maximalNumber;
	// 			number = number + 1
	// 		) {
	// 			yield {typeName: "success", unknownsValues: [number]};
	// 		}
	// 	},
	// },
	// "pair of () and () is []": {
	// 	*call(
	// 		functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
	// 		knownsValues: readonly [unknown, unknown],
	// 	): Generator<
	// 		{
	// 			readonly typeName: "success";
	// 			readonly unknownsValues: readonly [readonly [unknown, unknown]];
	// 		},
	// 		void,
	// 		void
	// 	> {
	// 		const [firstElement, secondElement] = knownsValues;
	// 		yield {
	// 			typeName: "success",
	// 			unknownsValues: [[firstElement, secondElement]],
	// 		};
	// 	},
	// },
	// "head of () is []": {
	// 	*call(
	// 		functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
	// 		knownsValues: readonly [readonly unknown[]],
	// 	): Generator<
	// 		{
	// 			readonly typeName: "success";
	// 			readonly unknownsValues: readonly [unknown];
	// 		},
	// 		void,
	// 		void
	// 	> {
	// 		const [[firstElement, secondElement]] = knownsValues;
	// 		yield {typeName: "success", unknownsValues: [firstElement]};
	// 	},
	// },
	// "tail of () is []": {
	// 	*call(
	// 		functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
	// 		knownsValues: readonly [readonly unknown[]],
	// 	): Generator<
	// 		{
	// 			readonly typeName: "success";
	// 			readonly unknownsValues: readonly [unknown];
	// 		},
	// 		void,
	// 		void
	// 	> {
	// 		const [[firstElement, secondElement]] = knownsValues;
	// 		yield {typeName: "success", unknownsValues: [secondElement]};
	// 	},
	// },
	// "is () pair": {
	// 	*call(
	// 		functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
	// 		knownsValues: readonly [unknown],
	// 	): Generator<
	// 		{readonly typeName: "success"; readonly unknownsValues: readonly []},
	// 		void,
	// 		void
	// 	> {
	// 		const [value] = knownsValues;
	// 		if (Array.isArray(value) && value.length === 2) {
	// 			yield {typeName: "success", unknownsValues: []};
	// 		}
	// 	},
	// },
	// "is not () pair": {
	// 	*call(
	// 		functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
	// 		knownsValues: readonly [unknown],
	// 	): Generator<
	// 		{readonly typeName: "success"; readonly unknownsValues: readonly []},
	// 		void,
	// 		void
	// 	> {
	// 		const [value] = knownsValues;
	// 		if (!Array.isArray(value) || value.length !== 2) {
	// 			yield {typeName: "success", unknownsValues: []};
	// 		}
	// 	},
	// },
	// "log ()": {
	// 	*call(
	// 		functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
	// 		knownsValues: readonly [unknown],
	// 	): Generator<
	// 		{readonly typeName: "success"; readonly unknownsValues: readonly []},
	// 		void,
	// 		void
	// 	> {
	// 		const [value] = knownsValues;
	// 		console.dir(value, {depth: Infinity});
	// 		yield {typeName: "success", unknownsValues: []};
	// 	},
	// },
	// "() < ()": {
	// 	*call(
	// 		functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
	// 		knownsValues: readonly [number, number],
	// 	): Generator<
	// 		{readonly typeName: "success"; readonly unknownsValues: readonly []},
	// 		void,
	// 		void
	// 	> {
	// 		const [number1, number2] = knownsValues;
	// 		if (number1 < number2) {
	// 			yield {typeName: "success", unknownsValues: []};
	// 		}
	// 	},
	// },
	// "() >= ()": {
	// 	*call(
	// 		functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
	// 		knownsValues: readonly [number, number],
	// 	): Generator<
	// 		{
	// 			readonly typeName: "success";
	// 			readonly unknownsValues: readonly unknown[];
	// 		},
	// 		void,
	// 		void
	// 	> {
	// 		const [number1, number2] = knownsValues;
	// 		if (number1 >= number2) {
	// 			yield {typeName: "success", unknownsValues: []};
	// 		}
	// 	},
	// },
	// "[] = ()": {
	// 	*call(
	// 		functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
	// 		knownsValues: readonly [unknown],
	// 	): Generator<
	// 		{
	// 			readonly typeName: "success";
	// 			readonly unknownsValues: readonly [unknown];
	// 		},
	// 		void,
	// 		void
	// 	> {
	// 		const [value] = knownsValues;
	// 		yield {typeName: "success", unknownsValues: [value]};
	// 	},
	// },
	// "placeholder": {
	// 	*call(): Generator<
	// 		{readonly typeName: "success"; readonly unknownsValues: readonly []},
	// 		void,
	// 		void
	// 	> {
	// 		yield {typeName: "success", unknownsValues: []};
	// 	},
	// },
} as const satisfies Functions;
