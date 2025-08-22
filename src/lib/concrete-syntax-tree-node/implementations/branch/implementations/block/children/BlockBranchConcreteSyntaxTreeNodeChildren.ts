import type {ClosingCurlyBracketLeafConcreteSyntaxTreeNode} from "../../../../leaf/implementations/closing-curly-bracket/ClosingCurlyBracketLeafConcreteSyntaxTreeNode.ts";
import type {OpeningCurlyBracketLeafConcreteSyntaxTreeNode} from "../../../../leaf/implementations/opening-curly-bracket/OpeningCurlyBracketLeafConcreteSyntaxTreeNode.ts";
import type {BlockContentBranchConcreteSyntaxTreeNode} from "../../block-content/BlockContentBranchConcreteSyntaxTreeNode.ts";
export type BlockBranchConcreteSyntaxTreeNodeChildren = readonly [
	openingCurlyBracket: OpeningCurlyBracketLeafConcreteSyntaxTreeNode,
	blockContent: BlockContentBranchConcreteSyntaxTreeNode | null,
	closingCurlyBracket: ClosingCurlyBracketLeafConcreteSyntaxTreeNode,
];
