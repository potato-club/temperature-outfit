import React, { useCallback } from 'react';

import { useResetRecoilState } from 'recoil';
import { topState, outerState, bottomState, shoesState, etcState } from 'recoil/atom';

export default function useEditResetRecoil() {
  const resetTopRecoil = useResetRecoilState(topState);
  const resetOuterRecoil = useResetRecoilState(outerState);
  const resetBottomRecoil = useResetRecoilState(bottomState);
  const resetShoesRecoil = useResetRecoilState(shoesState);
  const resetETCRecoil = useResetRecoilState(etcState);

  const resetRecoilState = useCallback(() => {
    resetTopRecoil();
    resetOuterRecoil();
    resetBottomRecoil();
    resetShoesRecoil();
    resetETCRecoil();
  }, [
    resetTopRecoil,
    resetOuterRecoil,
    resetBottomRecoil,
    resetShoesRecoil,
    resetETCRecoil,
  ]);

  return {
    resetRecoilState,
  };
}
