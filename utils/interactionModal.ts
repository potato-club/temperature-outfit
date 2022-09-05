import Swal, { SweetAlertIcon } from 'sweetalert2';

export const confirmModal = (
  title: string,
  fn: () => void,
  yesText = '예',
  noText = '아니오',
) => {
  Swal.fire({
    title,
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: yesText,
    cancelButtonText: noText,
  }).then((result) => {
    if (result.isConfirmed) {
      fn();
      Swal.fire({ title: '완료 되었습니다.', icon: 'success' }).then(() =>
        window.location.assign('/'),
      );
    }
  });
};

export const infoModal = (title: string, iconType: SweetAlertIcon, text? : string) => {
  Swal.fire({
    title,
    text,
    icon: iconType,
  });
};

// interface Fn {
//   (): void;
// }

// export const noBtn = (text: string, fn?: Fn): void => {
//   Swal.fire({
//     position: 'top-end',
//     icon: 'success',
//     title: text,
//     showConfirmButton: false,
//     confirmButtonColor: customColor.brandColor3,
//     timer: 1500,
//   });
//   fn?.();
// };

// export const twoBtn = (text: string, fn?: any): void => {
//   Swal.fire({
//     title: text,
//     showCancelButton: true,
//     confirmButtonText: 'Yes',
//     icon: 'warning',
//     confirmButtonColor: customColor.brandColor3,
//   }).then((result) => {
//     if (result.isConfirmed) {
//       noBtn('완료되었습니다.');
//       fn?.();
//     }
//   });
// };
