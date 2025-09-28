export class Source {
	public constructor(
		author: string,
		dateOfAccess: Date,
		description: string,
		url: string,
	) {
		this.author = author;
		this.dateOfAccess = dateOfAccess;
		this.description = description;
		this.url = url;
	}
	public readonly author: string;
	public readonly dateOfAccess: Date;
	public readonly description: string;
	public readonly url: string;
}
// TODO: ADD MERGING SAME SOURCES. USE ====
