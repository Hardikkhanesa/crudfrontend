import axios from 'axios'

import { apiUrl } from './helper'

const api = axios.create({
	baseURL: `${apiUrl}`
})

function getCookie(name) {
	let cookieValue = null
	if (document.cookie && document.cookie !== '') {
		const cookies = document.cookie.split(';')
		for (let i = 0; i < cookies.length; i += 1) {
			const cookie = cookies[i].trim()
			// Does this cookie string begin with the name we want?
			// eslint-disable-next-line prefer-template
			if (cookie.substring(0, name.length + 1) === name + '=') {
				cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
				break
			}
		}
	}
	return cookieValue
}

api.interceptors.request.use(
	(config) => {
		const tmpConfig = config
		tmpConfig.withCredentials = true
		tmpConfig.crossDomain = true
		tmpConfig.defaults = {}
		tmpConfig.defaults.withCredentials = true
		tmpConfig.headers['X-CSRFToken'] = getCookie('csrftoken')
		return tmpConfig
	},
	(error) => {
		return Promise.reject(error)
	}
)

export default api
