export abstract class Source {
	public constructor(authorName: string) {
		this.authorName = authorName;
	}
	public readonly authorName: string;
}
export class InternetSource extends Source {
	public constructor(
		authorName: string,
		dateOfAccess: Date,
		description: string,
		url: string,
	) {
		super(authorName);
		this.dateOfAccess = dateOfAccess;
		this.description = description;
		this.url = url;
	}
	public readonly dateOfAccess: Date;
	public readonly description: string;
	public readonly url: string;
}
export class BookSource extends Source {
	public constructor(
		authorName: string,
		dateOfPublication: Date,
		publisherName: string,
		title: string,
	) {
		super(authorName);
		this.dateOfPublication = dateOfPublication;
		this.publisherName = publisherName;
		this.title = title;
	}
	public readonly dateOfPublication: Date;
	public readonly publisherName: string;
	public readonly title: string;
}
export class ArticleSource extends Source {
	public constructor(
		authorName: string,
		dateOfPublication: Date,
		issue: string,
		journalName: string,
		pageNumbers: string,
		title: string,
		volume: string,
	) {
		super(authorName);
		this.dateOfPublication = dateOfPublication;
		this.issue = issue;
		this.journalName = journalName;
		this.pageNumbers = pageNumbers;
		this.title = title;
		this.volume = volume;
	}
	public readonly dateOfPublication: Date;
	public readonly issue: string;
	public readonly journalName: string;
	public readonly pageNumbers: string;
	public readonly title: string;
	public readonly volume: string;
}
// TODO: ADD MERGING SAME SOURCES. USE ====
