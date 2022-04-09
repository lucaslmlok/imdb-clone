import { useState } from "react";
import axios from "axios";
import { Movie } from "./react-app-env";
import { API_PATH } from "./utils/config";
import Header from "./components/Header";
import ResultArea from "./components/ResultArea";

function App() {
    const [keyword, setKeyword] = useState("");
    const [searchedKeyword, setSearchedKeyword] = useState("");
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const search = async () => {
        if (!keyword || keyword === searchedKeyword) return;
        setIsLoading(true);
        const url = `${API_PATH}AdvancedSearch/${process.env.REACT_APP_API_KEY}/`;
        const params = { title: keyword };
        const { data } = await axios.get(url, { params });
        if (data.results) {
            setMovies(data.results);
        } else {
            setErrorMessage(data.errorMessage);
        }
        setSearchedKeyword(keyword);
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
                    <ResultArea
                        isLoading={isLoading}
                        searchedKeyword={searchedKeyword}
                        movies={movies}
                        errorMessage={errorMessage}
                    />
                </div>
            </main>
        </>
    );
}

export default App;
