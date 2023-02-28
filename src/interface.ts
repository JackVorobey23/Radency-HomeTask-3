export interface DetailedBook{
    id: number,
	title: string,
	author: string,
 	cover: string,
 	content: string,
 	rating: number, 
	genre: string,
 	reviews: Review[]
}
export interface Review{
	id: number,
	message:string,
	reviewer:string
}
export interface BookListComponentDto{
	id: number,
	title: string,
	reviewsNumber: number,
	cover: string,
	rating: number
}

