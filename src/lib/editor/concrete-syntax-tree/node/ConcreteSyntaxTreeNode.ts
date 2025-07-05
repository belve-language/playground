export abstract class ConcreteSyntaxTreeNode<Data> {
	public readonly data: Data;
	protected constructor(data: Data) {
		this.data = data;
	}
}
