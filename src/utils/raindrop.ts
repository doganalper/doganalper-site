import type {
	RaindropsRequestOpts,
	RaindropsResponse,
} from 'src/types/raindrop'

const raindropId = import.meta.env.PUBLIC_RAINDROP_ID
const raindropToken = import.meta.env.PUBLIC_RAINDROP_TOKEN

export const DEFAULT_PER_PAGE = 8

async function getRaindropBookmarks(
	opts?: RaindropsRequestOpts,
): Promise<RaindropsResponse> {
	const { page = 0, perPage = DEFAULT_PER_PAGE } = opts || {}

	const raindropUrl = new URL(
		`https://api.raindrop.io/rest/v1/raindrops/${raindropId}`,
	)

	raindropUrl.searchParams.set('page', page.toString())
	raindropUrl.searchParams.set('perpage', perPage.toString())

	const response = await fetch(raindropUrl, {
		headers: {
			Authorization: `Bearer ${raindropToken}`,
		},
	})

	const data = await response.json()

	return data
}

export default getRaindropBookmarks
