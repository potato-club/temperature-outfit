import Swal from 'sweetalert2';
import { customColor } from 'constants/customColor';

interface Fn {
  (): void;
}

export const noBtn = (text: string, fn?: Fn): void => {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: text,
    showConfirmButton: false,
    confirmButtonColor: customColor.brandColor3,
    timer: 1500,
  });
  fn?.();
};

export const twoBtn = (text: string, fn?: any): void => {
  Swal.fire({
    title: text,
    showCancelButton: true,
    confirmButtonText: 'Yes',
    icon: 'warning',
    confirmButtonColor: customColor.brandColor3,
  }).then((result) => {
    if (result.isConfirmed) {
      noBtn('완료되었습니다.');
      fn?.();
    }
  });
};
