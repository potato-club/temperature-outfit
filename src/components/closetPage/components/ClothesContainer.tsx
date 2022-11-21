import styled from '@emotion/styled';
import { productApi } from 'api';
import { ClothesBox } from 'components/common';
import useFilter from 'hooks/useFilter';
import useGetItem from 'hooks/useGetItem';
import { useMutation } from 'react-query';
import { confirmModal, infoModal } from 'utils/interactionModal';

export const ClothesContainer = () => {
  const { filter } = useFilter(20);
  const { filterItem } = useGetItem(filter);

  const { mutate } = useMutation((id: string) => productApi.deleteProduct(id), {
    onSuccess: () => {
      infoModal('옷 삭제 완료!', 'success');
    },
    onError: (error) => {
      console.log(error);
    }
  });

  const removeCheck = (id: string) => {
    confirmModal('삭제 하시겠습니까?', () => mutate(id));
    
  };

  // useEffect(() => {
  //   getItem(filter);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [filter]);

  return (
    <Wrapper>
      {filterItem.map((data) => (
        <ClothesBox
          name={data.name}
          url={data.imageUrl}
          key={data.id}
          type="closet"
          id={data.id}
          deleteFn={removeCheck}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 2fr));
  grid-auto-rows: 140px;
  justify-items: center;
`;
