export abstract class FeedingResult<Data, TypeName extends string> {
	protected constructor(data: Data, typeName: TypeName) {
		this.data = data;
		this.typeName = typeName;
	}
	public readonly data: Data;
	public readonly typeName: TypeName;
}
