import type {Atom} from "../../../atom/Atom.ts";
import type {ConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
import {RuleFinalizingParsingResult} from "../../RuleFinalizingParsingResult.ts";
import {successRuleFinalizingParsingResultTypeName} from "./type-name/successRuleFinalizingParsingResultTypeName.ts";
export class SuccessRuleFinalizingParsingResult<
	NodeToUse extends ConcreteSyntaxTreeNode<Atom>,
> extends RuleFinalizingParsingResult<
	typeof successRuleFinalizingParsingResultTypeName
> {
	public constructor(node: NodeToUse) {
		super(successRuleFinalizingParsingResultTypeName);
		this.node = node;
	}
	public readonly node: NodeToUse;
}
