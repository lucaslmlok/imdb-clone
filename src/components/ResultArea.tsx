import { Movie } from "../react-app-env";
import Loader from "./Loader";
import List from "./List";

interface Props {
    isLoading: boolean;
    searchedKeyword: string;
    movies: Movie[];
    errorMessage: string;
}

const ResultArea = ({
    isLoading,
    searchedKeyword,
    movies,
    errorMessage,
}: Props) => {
    if (!searchedKeyword) {
        return <div className="placeholder">Start Searching!</div>;
    }

    return isLoading ? (
        <Loader />
    ) : (
        <List movies={movies} errorMessage={errorMessage} />
    );
};

export default ResultArea;
