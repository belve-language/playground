export class ChapterNumber {
	public static createEmpty(): ChapterNumber {
		const chapterNumber: ChapterNumber = new this([]);
		return chapterNumber;
	}
	public static createFromOneSegment(segment: number): ChapterNumber {
		const chapterNumber: ChapterNumber = new this([segment]);
		return chapterNumber;
	}
	private constructor(segments: readonly number[]) {
		this.segments = segments;
	}
	public push(segment: number): ChapterNumber {
		const newChapterNumber: ChapterNumber = new ChapterNumber([
			...this.segments,
			segment,
		]);
		return newChapterNumber;
	}
	private readonly segments: readonly number[];
	public stringify(): string {
		const stringifiedChapterNumber: string = this.segments
			.map((segment: number): string => {
				const stringifiedSegment: string = `${segment.toString(10)}.`;
				return stringifiedSegment;
			})
			.join("");
		return stringifiedChapterNumber;
	}
}
