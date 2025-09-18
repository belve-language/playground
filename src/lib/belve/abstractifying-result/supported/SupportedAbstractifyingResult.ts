import type {AbstractSyntaxTreeNode} from "../../abstract-syntax-tree-node/AbstractSyntaxTreeNode.ts";
import type {ErrorAbstractifyingResult} from "../implementations/error/ErrorAbstractifyingResult.ts";
import type {SuccessAbstractifyingResult} from "../implementations/success/SuccessAbstractifyingResult.ts";
export type SupportedAbstractifyingResult<
	NodeToUse extends AbstractSyntaxTreeNode<unknown>,
> = ErrorAbstractifyingResult | SuccessAbstractifyingResult<NodeToUse>;
