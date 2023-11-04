import axiosInstance from "./axiosInstance";
export const search = async () => {

}

export const getRestaurantsWithQuery = async (page = 1, limit = 25, otherQueries = []) => {
    console.log(otherQueries);
    try {
        let url = `/api/restaurant/?page=${page}&limit=${limit}`;
        if (otherQueries.length > 0) {
            otherQueries.forEach((q) => {
				url += `&${q.key}=${q.value}`;
			});
        }
        const response = await axiosInstance.get(url);
        return response.data;
    }catch (err) {
        throw err;
    }
}

export const searchMap = async(value) => {
    try {
        let url = `/api/restaurant/search?search=${encodeURIComponent(value)}&page=1&limit=1`;
        const response = await axiosInstance.get(url);
        return response.data;
    }catch (err) {
        throw err;
    }
}

export const searchRestaurants = async (page = 1, limit = 25, otherQueries = []) => {
    try {
        let url = `/api/restaurant/search?page=${page}&limit=${limit}`;
        if (otherQueries.length > 0) {
            otherQueries.forEach((q) => {
				url += `&${q.key}=${q.value}`;
			});
        }
        const response = await axiosInstance.get(url);
        return response.data;
    }catch (err) {
        throw err;
    }
}