import type {OperatorConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/tree-node-types/operator/OperatorConcreteSyntaxTreeNode.ts";
export function abstractifyOperator(
	operator: OperatorConcreteSyntaxTreeNode,
): Operator {
	switch (operator.data.character) {
		case ",": {
			return "and";
		}
		case ".": {
			return "or";
		}
	}
}
