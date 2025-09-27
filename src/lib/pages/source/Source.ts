export class Source {
	public constructor(description: string, url: string) {
		this.description = description;
		this.url = url;
	}
	public readonly description: string;
	public readonly url: string;
}
// TODO: ADD MERGING SAME SOURCES. USE ====
