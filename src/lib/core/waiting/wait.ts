export async function wait(seconds: number): Promise<void> {
	await new Promise<void>((resolve: () => void, reject: () => void): void => {
		setTimeout<[]>(resolve, seconds * 1000);
	});
}
