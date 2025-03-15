export const BASE_URL = import.meta.env.VITE_API_URL;

// Common URL Prefixes
export const API = `/api`;
export const V1 = `/v1`;
export const ADMIN = `/admin`;

export const API_V1_PREFIX = `${API}${V1}`;
export const API_URL = `${BASE_URL}${API_V1_PREFIX}`;
export const END_POINTS = {
	ADMIN: {
		ADD_GROCERY_ITEM: `${API_URL}${ADMIN}/add-grocery-items`,
		GET_ALL_GROCERY_ITEMS: `${API_URL}${ADMIN}/get-grocery-items`,
		GET_PRODUCT_BY_ID: (id) =>
			`${API_URL}${ADMIN}/get-grocery-items-by-id/${id}`,
		UPDATE_PRODUCT: (id) =>
			`${API_URL}${ADMIN}/update-grocery-items-by-id/${id}`,
		DELETE_PRODUCT: (id) =>
			`${API_URL}${ADMIN}//delete-grocery-items-by-id/${id}`,
	},
};
