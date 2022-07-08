import { BooksActions } from 'store/books/constants'

export interface IBooksState {
	books: IBook[]
	isLoading: boolean
	error: string | null
}

export interface IReadingModes {
	text: boolean
	image: boolean
}

export interface IDimensions {
	height: string
}

export interface IPanelizationSummary {
	containsEpubBubbles: boolean
	containsImageBubbles: boolean
}

export interface IImageLinks {
	smallThumbnail: string
	thumbnail: string
}

export interface IVolumeInfo {
	title: string
	authors: string[]
	publisher: string
	publishedDate: string
	description: string
	readingModes: IReadingModes
	pageCount: number
	printedPageCount: number
	dimensions: IDimensions
	printType: string
	averageRating: number
	ratingsCount: number
	maturityRating: string
	allowAnonLogging: boolean
	contentVersion: string
	panelizationSummary: IPanelizationSummary
	imageLinks: IImageLinks
	language: string
	previewLink: string
	infoLink: string
	canonicalVolumeLink: string
}

export interface ILayer {
	layerId: string
	volumeAnnotationsVersion: string
}

export interface ILayerInfo {
	layers: ILayer[]
}

export interface ISaleInfo {
	country: string
	saleability: string
	isEbook: boolean
}

export interface IEpub {
	isAvailable: boolean
}

export interface IPdf {
	isAvailable: boolean
}

export interface IAccessInfo {
	country: string
	viewability: string
	embeddable: boolean
	publicDomain: boolean
	textToSpeechPermission: string
	epub: IEpub
	pdf: IPdf
	webReaderLink: string
	accessViewStatus: string
	quoteSharingAllowed: boolean
}

export interface IBook {
	kind: string
	id: string
	etag: string
	selfLink: string
	volumeInfo: IVolumeInfo
	layerInfo: ILayerInfo
	saleInfo: ISaleInfo
	accessInfo: IAccessInfo
}

export interface ISearchBooksRequestAction {
	type: BooksActions.BOOKS_REQUEST_ACTION
}
export interface ISearchBooksSuccessAction {
	type: BooksActions.BOOKS_SUCCESS_ACTION
}
export interface ISearchBooksFailureAction {
	type: BooksActions.BOOKS_FAILURE_ACTION
}

export type BooksActionsUnion =
	| ISearchBooksRequestAction
	| ISearchBooksSuccessAction
	| ISearchBooksFailureAction
