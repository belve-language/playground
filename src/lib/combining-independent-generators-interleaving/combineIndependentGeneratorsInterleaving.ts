export function* combineIndependentGeneratorsInterleaving<Result>(
	...generators: Generator<Result, void, void>[]
): Generator<Result, void, void> {
	const isGeneratorDones = generators.map(() => {
		return false;
	});
	for (;;) {
		for (const [index, generator] of generators.entries()) {
			if (isGeneratorDones[index]) {
				continue;
			} else {
				const result = generator.next();
				if (result.done) {
					isGeneratorDones[index] = true;
				} else {
					yield result.value;
				}
			}
		}
		if (
			isGeneratorDones.every((isDone) => {
				return isDone;
			})
		) {
			break;
		}
	}
}
