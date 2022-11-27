export interface Game{
    id:number,
    name:string,
    price:number,
    imageUrl:string,
    gameDescription:string,
    date: Date,
    rating:number,
    status:string,
    genreId:number,
    platformId:number
    genre: {
        id:number,
        name:string
    },
    platform: {
        id:number,
        name:string
    }
}