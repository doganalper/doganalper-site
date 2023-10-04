type BookLog = {
	name: string
	author: string
	current: boolean
	link: string
}

const bookLog: BookLog[] = [
	{
		name: 'Chronicle of a Death Foretold',
		author: 'Gabriel García Márquez',
		current: false,
		link: 'https://www.goodreads.com/book/show/23878.Chronicle_of_a_Death_Foretold?ac=1&from_search=true&qid=whXe70ulYR&rank=1',
	},
]

export { bookLog, type BookLog }
