import { useNavigate } from 'react-router-dom';

import * as S from './styles';

const DirectoryItem = ({category}) => {
    const { title, imageUrl } = category;

    const navigate = useNavigate();
    const handleClick = () => navigate(`/shop/${title}`);

    return (
        <S.DirectoryItem>
            <S.ItemBackground $imageUrl={imageUrl} />
            <S.ItemBody onClick={handleClick}>
                <S.ItemTitle>{title}</S.ItemTitle>
                <S.ItemLink>Shop Now</S.ItemLink>
            </S.ItemBody>
        </S.DirectoryItem>
    )
}

export default DirectoryItem;
