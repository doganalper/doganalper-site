type BookLog = {
	name: string
	author: string
	current: boolean
	link: string
}

const bookLog: BookLog[] = [
	{
		name: 'Social Justice and the City',
		author: 'David Harvey',
		current: true,
		link: 'https://www.goodreads.com/book/show/184940.Social_Justice_and_the_City',
	},
	{
		name: 'Chronicle of a Death Foretold',
		author: 'Gabriel García Márquez',
		current: false,
		link: 'https://www.goodreads.com/book/show/23878.Chronicle_of_a_Death_Foretold',
	},
]

export { bookLog, type BookLog }
