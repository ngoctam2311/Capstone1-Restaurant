import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const axiosInstance = axios.create({
	baseURL: "https://foodie-finder-api.up.railway.app",
});

axiosInstance.interceptors.request.use(async (config) => {
	let accessToken = localStorage.getItem('accessToken');
	if (accessToken) {
		let token;
		const decodedToken = jwtDecode(accessToken);
		if (decodedToken.exp * 1000 < new Date().getTime()) {
			console.log('accessToken het han');
			token = await auth.currentUser?.getIdToken();
			if (token) {
				// const response = await signinToBackend(token);
				localStorage.setItem('accessToken', token);
				console.log('lưu new access token');
			
				config.headers.Authorization = 'Bearer ' + token;
			}
		} else {
			config.headers.Authorization = 'Bearer ' + accessToken;
		}
	}
	return config;
});

export default axiosInstance;