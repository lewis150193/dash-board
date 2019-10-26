export interface ICharaterObject  {
    id: string,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: string,
    location: {
     name: string,
     url: string
    },
    image: string
    episode: Array<string>,
    url: string
    created: string


}

