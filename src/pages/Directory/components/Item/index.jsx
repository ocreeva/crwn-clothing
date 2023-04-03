import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectCategoryById, selectCategoriesAsyncState } from '../../../../features/categories';
import asyncStatus from '../../../../constants/asyncStatus';

import * as S from './styles';
import LoadingGlyph from "../../../../components/LoadingGlyph";

const DirectoryItem = ({ categoryId }) => {
    const navigate = useNavigate();
    const asyncState = useSelector(selectCategoriesAsyncState);
    const category = useSelector(state => selectCategoryById(state, categoryId));

    if (asyncState.status !== asyncStatus.succeeded) return (<LoadingGlyph />);

    const { title, imageUrl } = category;

    const handleClick = () => navigate(`/shop/${categoryId}`);

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
