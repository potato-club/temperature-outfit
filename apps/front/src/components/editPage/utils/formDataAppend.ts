import { FieldValues } from 'react-hook-form';
import { userStateTypes } from 'recoil/atom/user';
import Router from 'next/router';

export const formDataAppend = (data: FieldValues, productsId: string, day: string, user:userStateTypes) => {
  const frm = new FormData();
  frm.append('date', `${day}`);

  // * data.image null 일때 삭제
  // * data.image undefined 일때 기존
  // * data.image 값 있으면 새로 추가
  if (data.image) {
    frm.append('image', data.image[0]);
  } else {
    frm.append('image', data.image);
  }

  frm.append('productsId', productsId);
  frm.append('comment', data.comment);
  frm.append('rating', data.rating);
  if (!Router.query.outfitId) {
    frm.append('locationId', user.locationId.toString());
  }
  return frm;
};
