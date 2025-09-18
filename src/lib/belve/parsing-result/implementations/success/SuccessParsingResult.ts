import {successParsingResultTypeName} from "./type-name/successParsingResultTypeName.ts";
import type {Atom} from "../../../atom/Atom.ts";
import type {ConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
import {ParsingResult} from "../../ParsingResult.ts";
export class SuccessParsingResult<
	NodeToUse extends ConcreteSyntaxTreeNode<Atom>,
> extends ParsingResult<typeof successParsingResultTypeName> {
	public constructor(node: NodeToUse) {
		super(successParsingResultTypeName);
		this.node = node;
	}
	public readonly node: NodeToUse;
}
