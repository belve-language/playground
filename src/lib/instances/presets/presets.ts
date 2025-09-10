import type {Preset} from "../../core/preset/Preset.ts";
export const presets = [
	{
		name: "Primality test",
		sourceCode: `is (dividend) not divisible by (divisor) {
	(dividend) % (divisor) = [remainder],
	(remainder) != (0)
}

is (number) prime {
	(number) > (1),
	(number) ^ (0.5) = [maximaldivisortocheck],
	none of the integers between (2) and (maximaldivisortocheck) divide (number)
}

none of the integers between (start) and (end) divide (dividend) {
	(start) > (end).
	(start) <= (end),
	is (dividend) not divisible by (start),
	(start) + (1) = [nextstart],
	none of the integers between (nextstart) and (end) divide (dividend)
}

{
	is (11) prime
}
`,
	},
	{
		name: "Insertion sort",
		sourceCode: `extract min from (list) to [min] and leave [rest] {
	pair of [head] and [tail] is (list),
	{
		is (tail) pair,
		extract min from (tail) to [sub-min] and leave [sub-rest],
		{
			(head) < (sub-min),
			[min] = (head),
			pair of (sub-min) and (sub-rest) is [rest]
		}.
		{
			(head) >= (sub-min),
			[min] = (sub-min),
			pair of (head) and (sub-rest) is [rest]
		}
	}.
	{
		is not (tail) pair,
		{
			(head) < (tail),
			[min] = (head),
			[rest] = (tail)
		}.
		{
			(head) >= (tail),
			[min] = (tail),
			[rest] = (head)
		}
	}
}

sort (list) to [sorted] {
	{
		is not (list) pair,
		[sorted] = (list)
	}.
	{
		is (list) pair,
		extract min from (list) to [min] and leave [rest],
		sort (rest) to [sorted-rest],
		pair of (min) and (sorted-rest) is [sorted]
	}
}

{
	pair of (5) and (3) is [list1],
	pair of (8) and (list1) is [list2],
	pair of (1) and (list2) is [list3],
	pair of (4) and (list3) is [list4],
	sort (list4) to [sorted]
}
`,
	},
] as const satisfies readonly Preset[];
