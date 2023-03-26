const LOCAL_THEME_NAME = 'theme'

export type Theme = 'light' | 'dark'
export function useTheme() {
	const getTheme = () => {
		if (
			typeof localStorage !== 'undefined' &&
			localStorage.getItem(LOCAL_THEME_NAME)
		) {
			return localStorage.getItem(LOCAL_THEME_NAME) as Theme
		}
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return 'dark'
		}
		return 'light'
	}

	const setTheme = (): Theme => {
		const newTheme = getTheme() === 'dark' ? 'light' : 'dark'

		localStorage.setItem(LOCAL_THEME_NAME, newTheme)

		if (newTheme === 'light') {
			document.documentElement.classList.add('light')
			document.documentElement.classList.remove('dark')
		} else {
			document.documentElement.classList.remove('light')
			document.documentElement.classList.add('dark')
		}

		return newTheme
	}

	return {
		setTheme,
		theme: getTheme(),
	}
}
