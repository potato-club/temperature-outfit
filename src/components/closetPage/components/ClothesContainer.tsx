import styled from '@emotion/styled';
import { productApi } from 'api';
import { ClothesBox } from 'components/common';
import useFilter from 'hooks/useFilter';
import useGetItem from 'hooks/useGetItem';
import { useMutation, useQueryClient } from 'react-query';
import { confirmModal, errorModal, infoModal } from 'utils/interactionModal';

export const ClothesContainer = () => {
  const { filter } = useFilter(20);
  const { filterItem } = useGetItem(filter);
  const queryClient = useQueryClient();

  const { mutate } = useMutation((id: string) => productApi.deleteProduct(id), {
    onSuccess: () => {
      infoModal('옷 삭제 완료!', 'success');
      queryClient.invalidateQueries('getItem');
    },
    onError: (err: unknown) => {
      errorModal('알 수 없는 오류', '서버의 상태가 이상합니다.');
    },
  });

  const removeCheck = (id: string) => {
    confirmModal(
      '삭제 하시겠습니까?',
      () => mutate(id),
      '예',
      '아니오',
      '⚠️주의 등록된 코디에서도 옷이 사라집니다',
    );
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
