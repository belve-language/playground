import type {FunctionCallAbstractSyntaxTreeNodeChildren} from "./children/FunctionCallAbstractSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import {KnownFunctionCallSegmentAbstractSyntaxTreeNode} from "../function-call-segment/implementations/known/KnownFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import {UnknownFunctionCallSegmentAbstractSyntaxTreeNode} from "../function-call-segment/implementations/unknown/UnknownFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionAbstractSyntaxTreeNodeChildrenFunctions} from "../functions/children/functions/FunctionAbstractSyntaxTreeNodeChildrenFunctions.ts";
export class FunctionCallAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode<FunctionCallAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: FunctionCallAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public computeId(): string {
		const id = this.children.segments
			.map((segment) => {
				const segmentId = segment.computeId();
				return segmentId;
			})
			.join(" ");
		return id;
	}
	public *execute(
		functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
		variables: {readonly [variableName: string]: unknown},
		depth: number,
	): Generator<{readonly [variableName: string]: unknown}, void, void> {
		// console.log(`${"\t".repeat(depth)}${this.computeId()}`);
		const id = this.computeId();
		const function_ = functions[id] || builtInFunctions[id];
		if (function_ === undefined) {
			throw new Error(`Function with id "${id}" not found.`);
		} else {
			const knownsNames = this.extractKnownsNames();
			const knownsValues: readonly unknown[] = knownsNames.map((name) => {
				if (name in variables) {
					return variables[name];
				}
				const number = parseFloat(name);
				if (!Number.isNaN(number)) {
					return number;
				}
				throw new Error(`Variable with name "${name}" not found.`);
			});
			// plase replace () with actual (name=value) and [] with actual [name=?]
			const unknownsNames = this.extractUnknownsNames();
			// console.log(
			// 	`${"\t".repeat(depth)}${this.computeId()
			// 		.replaceAll(
			// 			"()",
			// 			(() => {
			// 				const names = [...knownsNames];
			// 				const values = [...knownsValues];
			// 				return () => {
			// 					const name = names.shift();
			// 					const value = values.shift();
			// 					if (name === undefined || value === undefined) {
			// 						throw new Error("Unreachable");
			// 					}
			// 					return `(${name}=${value})`;
			// 				};
			// 			})(),
			// 		)
			// 		.replaceAll("[]", () => {
			// 			const names = [...unknownsNames];
			// 			const name = names.shift();
			// 			if (name === undefined) {
			// 				throw new Error("Unreachable");
			// 			}
			// 			return `[${name}=?]`;
			// 		})}`,
			// );
			const unknownsValueses = function_.call(functions, knownsValues, depth);
			let didSucceed = false;
			for (const unknownsValues of unknownsValueses) {
				didSucceed = true;
				// console.log(
				// 	`${"\t".repeat(depth)}🟢${unknownsNames
				// 		.map((name, index) => {
				// 			const value = unknownsValues[index];
				// 			return `${name}=${value}`;
				// 		})
				// 		.join(", ")}`,
				// );
				const unknowns: {readonly [name: string]: unknown} = Object.fromEntries(
					unknownsNames.map((name, index) => {
						return [name, unknownsValues[index]];
					}),
				);
				yield unknowns;
			}
			if (!didSucceed) {
				// console.log(`${"\t".repeat(depth)}🔴`);
			}
		}
	}
	private extractKnownsNames(): readonly string[] {
		return this.children.segments
			.filter((segment) => {
				return (
					segment instanceof KnownFunctionCallSegmentAbstractSyntaxTreeNode
				);
			})
			.map((segment) => {
				const name = segment.getVariableName();
				return name;
			});
	}
	private extractUnknownsNames(): readonly string[] {
		return this.children.segments
			.filter((segment) => {
				return (
					segment instanceof UnknownFunctionCallSegmentAbstractSyntaxTreeNode
				);
			})
			.map((segment) => {
				const name = segment.getVariableName();
				return name;
			});
	}
}
const builtInFunctions: FunctionAbstractSyntaxTreeNodeChildrenFunctions = {
	"() % () != ()": {
		*call(
			functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
			knownsValues: readonly [number, number, number],
		): Generator<readonly never[], void, void> {
			if (knownsValues[0] % knownsValues[1] !== knownsValues[2]) {
				yield [];
			}
		},
	},
	"() + () = []": {
		*call(
			functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
			knownsValues: readonly [number, number],
		): Generator<readonly [number], void, void> {
			const [number1, number2] = knownsValues;
			yield [number1 + number2];
		},
	},
	"() <= ()": {
		*call(
			functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
			knownsValues: readonly [number, number],
		): Generator<readonly never[], void, void> {
			if (knownsValues[0] <= knownsValues[1]) {
				yield [];
			}
		},
	},
	"() > ()": {
		*call(
			functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
			knownsValues: readonly [number, number],
		): Generator<readonly never[], void, void> {
			if (knownsValues[0] > knownsValues[1]) {
				yield [];
			}
		},
	},
	"root of degree () of () = []": {
		*call(
			functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
			knownsValues: readonly [number, number],
		): Generator<readonly [number], void, void> {
			const [degree, radicand] = knownsValues;
			yield [radicand ** (1 / degree)];
		},
	},
	"a [] between () and ()": {
		*call(
			functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
			knownsValues: readonly [number, number],
		): Generator<readonly [number], void, void> {
			const [minimalNumber, maximalNumber] = knownsValues;
			for (
				let number = minimalNumber;
				number <= maximalNumber;
				number = number + 1
			) {
				yield [number];
			}
		},
	},
	"pair of () and () is []": {
		*call(
			functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
			knownsValues: readonly [unknown, unknown],
		): Generator<readonly [readonly [unknown, unknown]], void, void> {
			const [firstElement, secondElement] = knownsValues;
			yield [[firstElement, secondElement]];
		},
	},
	"head of () is []": {
		*call(
			functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
			knownsValues: readonly [readonly unknown[]],
		): Generator<readonly [unknown], void, void> {
			const [[firstElement, secondElement]] = knownsValues;
			yield [firstElement];
		},
	},
	"tail of () is []": {
		*call(
			functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
			knownsValues: readonly [readonly unknown[]],
		): Generator<readonly [unknown], void, void> {
			const [[firstElement, secondElement]] = knownsValues;
			yield [secondElement];
		},
	},
	"is () pair": {
		*call(
			functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
			knownsValues: readonly [unknown],
		): Generator<readonly never[], void, void> {
			const [value] = knownsValues;
			if (Array.isArray(value) && value.length === 2) {
				yield [];
			}
		},
	},
	"is not () pair": {
		*call(
			functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
			knownsValues: readonly [unknown],
		): Generator<readonly never[], void, void> {
			const [value] = knownsValues;
			if (!Array.isArray(value) || value.length !== 2) {
				yield [];
			}
		},
	},
	"log ()": {
		*call(
			functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
			knownsValues: readonly [unknown],
		): Generator<readonly never[], void, void> {
			const [value] = knownsValues;
			console.dir(value, {depth: Infinity});
			yield [];
		},
	},
	"() < ()": {
		*call(
			functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
			knownsValues: readonly [number, number],
		): Generator<readonly never[], void, void> {
			const [number1, number2] = knownsValues;
			if (number1 < number2) {
				yield [];
			}
		},
	},
	"() >= ()": {
		*call(
			functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
			knownsValues: readonly [number, number],
		): Generator<readonly never[], void, void> {
			const [number1, number2] = knownsValues;
			if (number1 >= number2) {
				yield [];
			}
		},
	},
	"[] = ()": {
		*call(
			functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
			knownsValues: readonly [unknown],
		): Generator<readonly [unknown], void, void> {
			const [value] = knownsValues;
			yield [value];
		},
	},
};
