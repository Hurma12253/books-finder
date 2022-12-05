export const isInEnum = (string: string, object: object): boolean =>
	Object.values(object).includes(string)
