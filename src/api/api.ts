import axios, { AxiosRequestConfig } from 'axios'
import { ISearchBooksParams, ISearchBooksResponse } from 'api/type'

const axiosConfig: AxiosRequestConfig = {
	baseURL: 'https://www.googleapis.com/books/v1/volumes',
}

const axiosInstance = axios.create(axiosConfig)

const searchBooks = ({
	search,
	orderBy,
	category,
	startIndex,
}: ISearchBooksParams) => {
	return axiosInstance.get<ISearchBooksResponse>(``, {
		params: {
			q: `${search}${category !== 'all' ? `+subject:${category}` : ''}`,
			orderBy,
			maxResults: 8,
			startIndex,
		},
	})
}

const api = {
	searchBooks,
}

export default api
