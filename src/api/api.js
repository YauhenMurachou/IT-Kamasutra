import React from 'react';
import axios from 'axios';

const instance = axios.create(
	{
		withCredentials: true,
		baseURL: 'https://social-network.samuraijs.com/api/1.0/',
		headers: { 'API-KEY': '14df4201-237c-413e-a6c1-4357d4d19732' }
	}
)

const usersApi = {
	getUsers(currentPage = 1, pageSize = 20) {
		return (
			instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
		)
	}
}

export default usersApi;