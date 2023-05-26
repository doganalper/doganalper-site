type DateConfig = {
	weekday: boolean
	day: boolean
}

export default function (
	date: string | number | Date,
	config?: DateConfig,
): string {
	const { weekday = true, day = true } = config || {}
	let parsedDate = new Date(date)

	if (typeof date === 'string') {
		const parts = date.split('-')
		parsedDate = new Date(
			parseInt(parts[0]),
			parseInt(parts[1]) - 1,
			parts[2] ? parseInt(parts[2]) : 1,
		)
	}

	return parsedDate.toLocaleString('en-US', {
		year: 'numeric',
		month: 'short',
		day: day ? 'numeric' : undefined,
		weekday: weekday ? 'short' : undefined,
	})
}
