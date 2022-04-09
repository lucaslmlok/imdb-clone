/// <reference types="react-scripts" />

export interface Movie {
    id: string;
    title: string;
    image: string;
    genreList: { key: string; value: string }[];
    imDbRating: string;
}
