import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { userState } from 'recoil/atom';
import { useRecoilValue } from 'recoil';
import { FieldValues, useForm } from 'react-hook-form';
import { weatherApi } from 'api';
import { Title, Contents } from './components/index';
import { infoModal, debounceFunction } from 'utils';
import { formDataAppend } from './utils/formDataAppend';
import { useEditResetRecoil } from 'hooks';
import { useSubmitCody } from './hooks/useSubmitCody';
import { editStateAll } from 'recoil/selector/editStateAll';
import { useGetOutfit } from './hooks/useGetOutfit';

export function EditPage() {
  const router = useRouter();
  const [submitTimer, setSubmitTimer] = useState<NodeJS.Timer>();
  const [day, setDay] = useState('');
  const productsId = useRecoilValue(editStateAll);

  useEffect(() => {
    if (router.isReady) {
      setDay(router.query.day as string);
    }
  }, [router]);

  const { mutate } = useSubmitCody();

  const submit = async (data: FieldValues) => {
    debounceFunction({
      timer: submitTimer,
      setTimer: setSubmitTimer,
      fn: async () => {
        // 등록된옷이 하나도 없을때
        if (!productsId) {
          infoModal('옷을 하나 이상 등록 해주세요', 'error');
          return;
        }
        const frm = formDataAppend(data, productsId, day, user);
        const outfitId = router.query.outfitId as string;
        await getWeather(); // 등록전에 날씨 한번 불러와달라는 백엔드 요청사항
        mutate({ frm, outfitId });
      },
    });
  };

  const { resetRecoilState } = useEditResetRecoil();
  const user = useRecoilValue(userState);


  const getWeather = useCallback(async () => {
    if (!day) return;
    try {
      await weatherApi.getWeather(day, user.locationId);
    } catch (error) {
      console.log(error);
    }
  }, [day, user.locationId]);

  useEffect(() => {
    return () => {
      resetRecoilState();
    };
  }, [resetRecoilState]);

  const {
    register,
    handleSubmit,
    setValue,
    control,
    watch,
    formState: { errors },
  } = useForm();

  useGetOutfit({ setValue, setDay });

  return (
    <>
      {router.isReady && (
        <Container>
          <Title day={day} />
          <form style={{ width: '100%' }} onSubmit={handleSubmit(submit)}>
            <Contents
              register={register}
              errors={errors}
              setValue={setValue}
              control={control}
              watch={watch}
            />
          </form>
        </Container>
      )}
    </>
  );
}

const Container = styled.section`
  display: flex;
  width: 100%;
  max-width: 1178px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 12px;
`;
