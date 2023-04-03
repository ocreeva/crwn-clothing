import * as S from "./styles";
import DirectoryItem from "./components/Item";

const categoryOrder = [
    "hats",
    "jackets",
    "sneakers",
    "womens",
    "mens",
];

const DirectoryPage = () => (
    <S.Directory>
        { categoryOrder.map(categoryId => <DirectoryItem key={categoryId} categoryId={categoryId} />) }
    </S.Directory>
);

export default DirectoryPage;

