import { todayCodyApi } from 'api';
import Router from 'next/router';
import { useMutation } from 'react-query'
import { completeCheckModal, errorModal } from 'utils';

export const useSubmitCody = () => {
  const submitCody = ({ frm, outfitId }: { frm: FormData; outfitId?: string }) => 
  outfitId ? todayCodyApi.putOutfit(outfitId, frm) : todayCodyApi.addProduct(frm);

      
  return useMutation(submitCody,
    {
      onSuccess: () => {
        completeCheckModal(() => Router.push('/calendar'));
      },
      onError: (err: unknown) => {
        errorModal('알 수 없는 오류', '서버의 상태가 이상합니다.');
      },
    },
  );
}
