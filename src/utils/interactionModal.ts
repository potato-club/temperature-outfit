import { stringify } from 'querystring';
import Swal, { SweetAlertIcon } from 'sweetalert2';

export const confirmModal = (
  title: string,
  fn: () => void,
  yesText = '예',
  noText = '아니오',
  text?: string,
) => {
  Swal.fire({
    title,
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: yesText,
    cancelButtonText: noText,
    text,
  }).then((result) => {
    if (result.isConfirmed) {
      fn();
    }
  });
};

export const infoModal = (
  title: string,
  iconType: SweetAlertIcon,
  text?: string,
) => {
  Swal.fire({
    title,
    text,
    icon: iconType,
  });
};

export const completeCheckModal = (fn: () => void) => {
  Swal.fire({
    title: '완료되었습니다.',
    icon: 'success',
  }).then(() => {
    fn();
  });
};

export const errorModal = (title: string, text?: string, fn?: () => void) => {
  Swal.fire({
    title,
    text,
    icon: 'error',
    timer: 1500,
    position: 'top-end',
    showConfirmButton: false,
  }).then(() => {
    fn?.();
  });
};
