export interface ISearchBooksParams {
	search: string
	orderBy: OrderByParams
	category: CategoryParams
	startIndex: number
}

export enum CategoryParams {
	all = 'all',
	art = 'art',
	biography = 'biography',
	computers = 'computers',
	history = 'history',
	medical = 'medical',
	poetry = 'poetry',
}

export enum OrderByParams {
	relevance = 'relevance',
	newest = 'newest',
}

export interface ISearchBooksResponse {
	kind: string
	totalItems: number
	items: Book[]
}

export interface IndustryIdentifier {
	type: string
	identifier: string
}

export interface ReadingModes {
	text: boolean
	image: boolean
}

export interface PanelizationSummary {
	containsEpubBubbles: boolean
	containsImageBubbles: boolean
}

export interface ImageLinks {
	smallThumbnail: string
	thumbnail: string
}

export interface VolumeInfo {
	title: string
	authors: string[]
	publisher: string
	publishedDate: string
	description: string
	industryIdentifiers: IndustryIdentifier[]
	readingModes: ReadingModes
	printType: string
	categories: string[]
	maturityRating: string
	allowAnonLogging: boolean
	contentVersion: string
	panelizationSummary: PanelizationSummary
	imageLinks: ImageLinks
	language: string
	previewLink: string
	infoLink: string
	canonicalVolumeLink: string
}

export interface SaleInfo {
	country: string
	saleability: string
	isEbook: boolean
}

export interface Epub {
	isAvailable: boolean
	acsTokenLink: string
}

export interface Pdf {
	isAvailable: boolean
	acsTokenLink: string
}

export interface AccessInfo {
	country: string
	viewability: string
	embeddable: boolean
	publicDomain: boolean
	textToSpeechPermission: string
	epub: Epub
	pdf: Pdf
	webReaderLink: string
	accessViewStatus: string
	quoteSharingAllowed: boolean
}

export interface SearchInfo {
	textSnippet: string
}

export interface Book {
	kind: string
	id: string
	etag: string
	selfLink: string
	volumeInfo: VolumeInfo
	saleInfo: SaleInfo
	accessInfo: AccessInfo
	searchInfo: SearchInfo
}
