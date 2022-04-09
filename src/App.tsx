import { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import { API_PATH } from "./utils/config";
import Loader from "./components/Loader";

export interface Movie {
    id: string;
    title: string;
    image: string;
    genreList: { key: string; value: string }[];
    imDbRating: string;
}

function App() {
    const [keyword, setKeyword] = useState("");
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const search = async () => {
        setIsLoading(true);
        const url = `${API_PATH}AdvancedSearch/${process.env.REACT_APP_API_KEY}/`;
        const config = {
            params: {
                title: keyword,
            },
        };
        const res = await axios.get(url, config);
        setMovies(res.data.results);
        setIsLoading(false);
    };

    return (
        <>
            <Header
                keyword={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onSearch={search}
            />
            <main>
                <div className="container">
                    {isLoading ? <Loader /> : <List movies={movies} />}
                </div>
            </main>
        </>
    );
}

const List = ({ movies }: { movies: Movie[] }) => {
    if (movies.length === 0) {
        return <div>No Result</div>;
    }

    return (
        <ul className="list">
            {movies.map((movie) => (
                <ListItem key={movie.id} movie={movie} />
            ))}
        </ul>
    );
};

export default App;
