import { infoModal } from './interactionModal';

export const copyClipBoard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    infoModal('이메일이 복사되었습니다', 'success');
  } catch (e) {
    infoModal('복사에 실패하였습니다', 'error');
  }
};
