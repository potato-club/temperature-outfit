import { infoModal } from './interactionModal';

const textCheck = (text:string) => {
  //text의 마지막 음절의 유니코드(UTF-16)
  const charCode = text.charCodeAt(text.length - 1);

  //유니코드의 한글 범위 내에서 해당 코드의 받침 확인
  const consonantCode = (charCode - 44032) % 28;

  if (consonantCode === 0) {
    //0이면 받침 없음 -> 가/를/는/와
    return `${text}가`;
  }
  //1이상이면 받침 있음 -> 이/을/은/과
  return `${text}이`;
}

export const copyClipBoard = async (text: string, textType?: string) => {
  try {
    await navigator.clipboard.writeText(text);
    infoModal(`${textType ? textCheck(textType) + ' ' : ''}복사되었습니다`, 'success');
  } catch (e) {
    infoModal('복사에 실패하였습니다', 'error');
  }
};
