import axios, { AxiosRequestConfig } from 'axios'
import { ISearchBooksParams, ISearchBooksResponse } from 'api/type'

const axiosConfig: AxiosRequestConfig = {
	baseURL: 'https://www.googleapis.com/books/v1/volumes',
}

const axiosInstance = axios.create(axiosConfig)

const searchBooks = ({ search, orderBy, category }: ISearchBooksParams) => {
	return axiosInstance.get<ISearchBooksResponse>(``, {
		params: {
			q: `${search}${category !== 'all' ? `+subject:${category}` : ''}`,
			orderBy,
		},
	})
}

const api = {
	searchBooks,
}

export default api
