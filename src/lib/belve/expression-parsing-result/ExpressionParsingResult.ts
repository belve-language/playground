export abstract class ExpressionParsingResult<TypeName extends string> {
	protected constructor(typeName: TypeName) {
		this.typeName = typeName;
	}
	public readonly typeName: TypeName;
}
