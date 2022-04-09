import ContentLoader from "react-content-loader";

const LoaderItem = () => (
    <li className="list__item">
        <ContentLoader
            style={{ width: "100%", aspectRatio: "0.526", opacity: 0.2 }}
            speed={2}
            viewBox="0 0 213 405"
        >
            <rect x="0" y="0" rx="2" ry="2" width="213" height="316" />
            <circle cx="22" cy="340" r="10" />
            <rect x="42" y="336" rx="2" ry="2" width="40" height="8" />
            <rect x="12" y="366" rx="2" ry="2" width="160" height="10" />
        </ContentLoader>
    </li>
);

const dummyList = Array(10).fill(null);

const Loader = () => (
    <ul className="list">
        {dummyList.map((_, index) => (
            <LoaderItem key={index} />
        ))}
    </ul>
);

export default Loader;
