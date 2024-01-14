import React from 'react';
import styled from 'styled-components';
import { FavoriteButton } from '../atoms/FavoriteButton';
import { IconButtonType } from '../../types/Enums';
import { BlueButton } from '../atoms/BlueButton';
import { useRecoilState } from 'recoil';
import { favoriteState } from '../../recoil/atoms';
import { ProductCardProps } from '../../types/types';

const ProductCard = styled.div`
  max-width: 411px;
  height: 572px;
  border: 1px solid #d3eaff;
	display: inline-block;
`;
const CartButtons = styled.div`
  display: flex;
  gap: 16px;
`;
const CardInfo = styled.div`
  height: 276px;
  width: 100%;
  box-sizing: border-box;
  padding: 32px 32px 24px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductImage = styled.img`
  height: 296px;
  object-fit: contain;
  width: 100%;
`;

const ProductName = styled.p`
  color: #1e1e1e;
  margin: 0 0 16px 0;
  text-align: center;
  font-family: Syne;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 29px;
  text-transform: uppercase;
`;

const ProductDesc = styled.p`
  color: #556b84;
  max-height: 100px;
  margin: 0;
  text-align: center;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductCardComponent: React.FC<ProductCardProps> = ({
  id,
  imageSrc,
  name,
  description,
}) => {
  const [data, setData] = useRecoilState(favoriteState);
  
  const isInFavorites = data.find((elem) => elem.id === id);

  const onAddToFavorites = () => {
    if (id && imageSrc && name && description) {
      setData([
        ...data,
        {
          id,
          imageSrc,
          name,
          description,
        },
      ]);
    }
  };

  const onDeleteToFavorites = () => {
    if (id && imageSrc && name && description) {
      setData(data.filter((elem) => elem.id !== id));
    }
  };

  return (
    <ProductCard>
      <ProductImage src={imageSrc} alt={name || 'no data'} />

      <CardInfo>
        <div>
          <ProductName>{name || 'no data'}</ProductName>
          <ProductDesc>{description || 'no data'}</ProductDesc>
        </div>

        <CartButtons>
          <BlueButton>buy</BlueButton>

          {isInFavorites ? (
            <FavoriteButton
              onChange={onDeleteToFavorites}
              type={IconButtonType.Dump}
            />
          ) : (
            <FavoriteButton
              onChange={onAddToFavorites}
              type={IconButtonType.Heart}
            />
          )}

        </CartButtons>
      </CardInfo>
    </ProductCard>
  );
};

export const Card: React.FC<ProductCardProps> = ({
  id,
  imageSrc,
  name,
  description,
}) => {
  return (
    <div>
      <ProductCardComponent
        id={id}
        imageSrc={imageSrc}
        name={name}
        description={description}
      />
    </div>
  );
};
