import { Movie } from "../react-app-env";
import ListItem from "./ListItem";

interface Props {
    movies: Movie[];
    errorMessage: string;
}

const List = ({ movies, errorMessage }: Props) => {
    if (errorMessage) {
        return <div className="placeholder">Error: {errorMessage}</div>;
    }

    if (movies.length === 0) {
        return <div className="placeholder">No Result</div>;
    }

    return (
        <ul className="list">
            {movies.map((movie) => (
                <ListItem key={movie.id} movie={movie} />
            ))}
        </ul>
    );
};

export default List;
