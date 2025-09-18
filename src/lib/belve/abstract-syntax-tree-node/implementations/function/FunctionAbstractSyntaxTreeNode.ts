import type {FunctionAbstractSyntaxTreeNodeChildren} from "./children/FunctionAbstractSyntaxTreeNodeChildren.ts";
import type {SupportedAbstractifyingResult} from "../../../abstractifying-result/supported/SupportedAbstractifyingResult.ts";
import {FunctionConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/function/FunctionConcreteSyntaxTreeNode.ts";
import type {OptionalFunctionHeaderConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-function-header/OptionalFunctionHeaderConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionsAbstractSyntaxTreeNode} from "../functions/supported/SupportedFunctionsAbstractSyntaxTreeNode.ts";
export abstract class FunctionAbstractSyntaxTreeNode<
	FunctionHeaderAbstractSyntaxTreeNodeToUse extends
		FunctionHeaderAbstractSyntaxTreeNode | null,
> extends AbstractSyntaxTreeNode<
	FunctionAbstractSyntaxTreeNodeChildren<FunctionHeaderAbstractSyntaxTreeNodeToUse>
> {
	protected constructor(
		children: FunctionAbstractSyntaxTreeNodeChildren<FunctionHeaderAbstractSyntaxTreeNodeToUse>,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public abstract addToFunctions(
		functions: SupportedFunctionsAbstractSyntaxTreeNode,
	): SupportedAbstractifyingResult<SupportedFunctionsAbstractSyntaxTreeNode>;
	public concretify(): FunctionConcreteSyntaxTreeNode {
		// TODO
		throw new Error("Method not implemented.");
		// const header = this.concretifyHeader();
		// const body = this.children.body.concretify();
		// const functionAtom: FunctionConcreteSyntaxTreeNodeAtom = ThenAtom.create(
		// 	new NonTerminalAtom(header),
		// 	new NonTerminalAtom(body),
		// );
		// const function_: FunctionConcreteSyntaxTreeNode =
		// 	new FunctionConcreteSyntaxTreeNode(functionAtom);
		// return function_;
	}
	public abstract concretifyHeader(): OptionalFunctionHeaderConcreteSyntaxTreeNode;
	public abstract createFunctions(): SupportedFunctionsAbstractSyntaxTreeNode;
	public lint(): readonly string[] {
		const bodyMessages = this.children.body.lint();
		const functionMessages: readonly string[] = bodyMessages;
		return functionMessages;
	}
}
