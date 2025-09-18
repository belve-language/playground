import type {Index2} from "../index-2/Index2.ts";
export function* generateIndex2Diagonally(): Generator<Index2, void, void> {
	let sum = 0;
	for (;;) {
		for (let index1 = 0; index1 <= sum; index1 = index1 + 1) {
			const index2 = sum - index1;
			yield {_1: index1, _2: index2};
		}
		sum = sum + 1;
	}
}
