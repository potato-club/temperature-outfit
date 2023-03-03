import React, { useCallback } from 'react';

import { useResetRecoilState } from 'recoil';
import { topState, outerState, bottomState, shoesState, etcState } from 'recoil/atom';
import { codyThumbnail } from 'recoil/atom/editState';

export function useEditResetRecoil() {
  const resetTopRecoil = useResetRecoilState(topState);
  const resetOuterRecoil = useResetRecoilState(outerState);
  const resetBottomRecoil = useResetRecoilState(bottomState);
  const resetShoesRecoil = useResetRecoilState(shoesState);
  const resetETCRecoil = useResetRecoilState(etcState);
  const resetThumbnail = useResetRecoilState(codyThumbnail);

  const resetRecoilState = useCallback(() => {
    resetTopRecoil();
    resetOuterRecoil();
    resetBottomRecoil();
    resetShoesRecoil();
    resetETCRecoil();
    resetThumbnail();
  }, [
    resetTopRecoil,
    resetOuterRecoil,
    resetBottomRecoil,
    resetShoesRecoil,
    resetETCRecoil,
    resetThumbnail,
  ]);

  return {
    resetRecoilState,
  };
}
