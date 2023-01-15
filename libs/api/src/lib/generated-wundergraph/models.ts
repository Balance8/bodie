// Code generated by wunderctl. DO NOT EDIT.

export interface CountriesInput {
	code: string;
}

export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };

export interface GraphQLError {
	message: string;
	path?: ReadonlyArray<string | number>;
}

export interface InternalCountriesInput {
	code: string;
}

export interface InjectedCountriesInput {
	code: string;
}

export interface CountriesResponse {
	data?: CountriesResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface CountriesResponseData {
	countries_countries: {
		code: string;
		name: string;
		capital?: string;
		currency?: string;
		languages: {
			name?: string;
		}[];
		emoji: string;
		emojiU: string;
	}[];
}
