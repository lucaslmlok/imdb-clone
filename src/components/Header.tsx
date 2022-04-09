import { MdSearch } from "react-icons/md";
import logo from "../assets/logo192.png";

interface Props {
    keyword: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onSearch: () => void;
}

const Header = ({ keyword, onChange, onSearch }: Props) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <a className="header__logo" href=".">
                        <img src={logo} alt="MYDb Logo" />
                    </a>
                    <div className="header__search-bar">
                        <input
                            placeholder="Search IMDb"
                            value={keyword}
                            onChange={onChange}
                            onKeyDown={(e) => e.code === "Enter" && onSearch()}
                        />
                        <MdSearch
                            className="header__search-icon"
                            onClick={onSearch}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
