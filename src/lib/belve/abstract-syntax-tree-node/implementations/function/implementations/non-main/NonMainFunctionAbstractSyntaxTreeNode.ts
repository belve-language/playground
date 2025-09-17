import {ErrorAbstractifyingResult} from "../../../../../abstractifying-result/implementations/error/ErrorAbstractifyingResult.ts";
import {errorAbstractifyingResultTypeName} from "../../../../../abstractifying-result/implementations/error/type-name/errorAbstractifyingResultTypeName.ts";
import {SuccessAbstractifyingResult} from "../../../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import type {OptionalFunctionHeaderConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree-node/implementations/optional-function-header/OptionalFunctionHeaderConcreteSyntaxTreeNode.ts";
import {
	FailureLogFunctionCallingResult,
	StepLogFunctionCallingResult,
	SuccessLogFunctionCallingResult,
	type SupportedLogFunctionCallingResult,
} from "../../../../../function-calling-result/implementations/log/LogFunctionCallingResult.ts";
import {ReturnFunctionCallingResult} from "../../../../../function-calling-result/implementations/return/ReturnFunctionCallingResult.ts";
import type {NonMainFunctions} from "../../../../../non-main-functions/NonMainFunctions.ts";
import {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {failureStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/failure/type-name/failureStatementExecutingResultTypeName.ts";
import {
	failureLogStatementExecutingResultTypeName,
	stepLogStatementExecutingResultTypeName,
	successLogStatementExecutingResultTypeName,
} from "../../../../../statement-executing-result/implementations/log/LogStatementExecutingResult.ts";
import {logStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/log/type-name/logStatementExecutingResultTypeName.ts";
import {returnStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/return/type-name/returnStatementExecutingResultTypeName.ts";
import type {Variables} from "../../../../../variables/Variables.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../../../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import {WithoutMainFunctionFunctionsAbstractSyntaxTreeNode} from "../../../functions/implementations/without-main-function/WithoutMainFunctionFunctionsAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionsAbstractSyntaxTreeNode} from "../../../functions/supported/SupportedFunctionsAbstractSyntaxTreeNode.ts";
import {computeUnknowns} from "../../../statement/implementations/function-call/computing-unknowns/computeUnknowns.ts";
import {FunctionAbstractSyntaxTreeNode} from "../../FunctionAbstractSyntaxTreeNode.ts";
import type {FunctionAbstractSyntaxTreeNodeChildren} from "../../children/FunctionAbstractSyntaxTreeNodeChildren.ts";
import type {readonly} from "svelte/store";
export class NonMainFunctionAbstractSyntaxTreeNode extends FunctionAbstractSyntaxTreeNode<FunctionHeaderAbstractSyntaxTreeNode> {
	public static create(
		children: FunctionAbstractSyntaxTreeNodeChildren<FunctionHeaderAbstractSyntaxTreeNode>,
		spanIndexes: SpanIndexes,
	): NonMainFunctionAbstractSyntaxTreeNode {
		const id = children.header.id;
		const node = new this(children, id, spanIndexes);
		return node;
	}
	private constructor(
		children: FunctionAbstractSyntaxTreeNodeChildren<FunctionHeaderAbstractSyntaxTreeNode>,
		id: string,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
		this.id = id;
	}
	public override addToFunctions(
		functions: SupportedFunctionsAbstractSyntaxTreeNode,
	):
		| ErrorAbstractifyingResult
		| SuccessAbstractifyingResult<SupportedFunctionsAbstractSyntaxTreeNode> {
		const addingFunctionResult = functions.addNonMainFunction(this);
		switch (addingFunctionResult.typeName) {
			case errorAbstractifyingResultTypeName: {
				const addingToFunctionsResult: ErrorAbstractifyingResult =
					new ErrorAbstractifyingResult(addingFunctionResult.message);
				return addingToFunctionsResult;
			}
			case successAbstractifyingResultTypeName: {
				const newFunctions = addingFunctionResult.data;
				const addingToFunctionsResult: SuccessAbstractifyingResult<SupportedFunctionsAbstractSyntaxTreeNode> =
					new SuccessAbstractifyingResult(newFunctions);
				return addingToFunctionsResult;
			}
		}
	}
	public *call(
		nonMainFunctions: NonMainFunctions,
		knownsValues: readonly unknown[],
	): Generator<
		ReturnFunctionCallingResult | SupportedLogFunctionCallingResult,
		void,
		void
	> {
		const knowns: Variables = this.computeKnowns(knownsValues);
		const variables: Variables = knowns;
		const nonMainFunctionCallingResult1 = new StepLogFunctionCallingResult(
			this.children.header,
			variables,
		);
		yield nonMainFunctionCallingResult1;
		const bodyExecutingResults = this.children.body.execute(
			nonMainFunctions,
			variables,
		);
		for (const bodyExecutingResult of bodyExecutingResults) {
			switch (bodyExecutingResult.typeName) {
				case logStatementExecutingResultTypeName: {
					switch (bodyExecutingResult.actionTypeName) {
						case stepLogStatementExecutingResultTypeName: {
							const nonMainFunctionCallingResult2 =
								new StepLogFunctionCallingResult(
									bodyExecutingResult.node,
									bodyExecutingResult.variables,
								);
							yield nonMainFunctionCallingResult2;
							break;
						}
						case successLogStatementExecutingResultTypeName: {
							const nonMainFunctionCallingResult2 =
								new SuccessLogFunctionCallingResult(
									bodyExecutingResult.node,
									bodyExecutingResult.unknowns,
									bodyExecutingResult.variables,
								);
							yield nonMainFunctionCallingResult2;
							break;
						}
						case failureLogStatementExecutingResultTypeName: {
							const nonMainFunctionCallingResult2 =
								new FailureLogFunctionCallingResult(
									bodyExecutingResult.node,
									bodyExecutingResult.variables,
								);
							yield nonMainFunctionCallingResult2;
							break;
						}
					}
					break;
				}
				case returnStatementExecutingResultTypeName: {
					const unknowns: Variables = bodyExecutingResult.unknowns;
					const nonMainFunctionCallingResult2 =
						new SuccessLogFunctionCallingResult(
							this.children.header,
							unknowns,
							variables,
						);
					yield nonMainFunctionCallingResult2;
					const unknownsValues = this.computeUnknownsValues(unknowns);
					const functionCallingResult3: ReturnFunctionCallingResult =
						new ReturnFunctionCallingResult(unknownsValues);
					yield functionCallingResult3;
					break;
				}
				case failureStatementExecutingResultTypeName: {
					const nonMainFunctionCallingResult2 =
						new FailureLogFunctionCallingResult(
							this.children.header,
							variables,
						);
					yield nonMainFunctionCallingResult2;
					break;
				}
			}
		}
	}
	public computeKnowns(knownsValues: readonly unknown[]): Variables {
		const knowns: Variables = this.children.header.computeKnowns(knownsValues);
		return knowns;
	}
	public computeUnknowns(variables: Variables): Variables {
		const unknowns: Variables = Object.fromEntries<unknown>(
			this.children.header.unknownsNames.map((unknownName) => {
				return [unknownName, variables[unknownName]];
			}),
		);
		return unknowns;
	}
	public computeUnknownsValues(variables: Variables): readonly unknown[] {
		const unknownsValues: readonly unknown[] =
			this.children.header.unknownsNames.map((unknownName: string): unknown => {
				return variables[unknownName];
			});
		return unknownsValues;
	}
	public override concretifyHeader(): OptionalFunctionHeaderConcreteSyntaxTreeNode {
		// TODO
		throw new Error("Method not implemented.");
	}
	public override createFunctions(): WithoutMainFunctionFunctionsAbstractSyntaxTreeNode {
		const functions = new WithoutMainFunctionFunctionsAbstractSyntaxTreeNode(
			{mainFunction: null, nonMainFunctions: {[this.id]: this}},
			this.spanIndexes,
		);
		return functions;
	}
	public readonly id: string;
	public *mutate(
		functionsHeaders: readonly FunctionHeaderAbstractSyntaxTreeNode[],
	): Generator<NonMainFunctionAbstractSyntaxTreeNode, void, void> {
		for (const mutatedBody of this.children.body.mutate(
			functionsHeaders,
			this.children.header.unknownsNames,
			this.children.header.knownsNames,
		)) {
			// TODO
			const nonMainFunction = NonMainFunctionAbstractSyntaxTreeNode.create(
				{...this.children, body: mutatedBody},
				new SpanIndexes(0, 0),
			);
			yield nonMainFunction;
		}
	}
}
