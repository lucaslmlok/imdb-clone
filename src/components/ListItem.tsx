import { MdStar } from "react-icons/md";
import { Movie } from "../App";

interface Props {
    movie: Movie;
}

const ListItem = ({ movie }: Props) => {
    const link = `https://www.imdb.com/title/${movie.id}/`;
    return (
        <li className="list__item">
            <a href={link} target="_blank" rel="noreferrer">
                <img
                    className="list__item-img"
                    src={movie.image}
                    alt={movie.title}
                />
            </a>
            <div className="list__item-content">
                <div className="list__item-rating">
                    <MdStar className="list__item-star" />
                    <span>{movie.imDbRating}</span>
                </div>
                <a
                    className="item__item-title"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                >
                    {movie.title}
                </a>
            </div>
        </li>
    );
};

export default ListItem;
