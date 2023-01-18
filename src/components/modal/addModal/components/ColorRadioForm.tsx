import * as React from 'react';
import Radio from '@mui/material/Radio';
import styled from '@emotion/styled';
import {
  Control,
  Controller,
  FieldErrorsImpl,
  FieldValues,
} from 'react-hook-form';
import { customColor, radioBtnColor } from 'constants/customColor';
import { ErrorMessage } from '@hookform/error-message';

type Props = {
  control: Control<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
};

export const ColorRadioForm = ({ control, errors }: Props) => {
  return (
    <Container>
      <Wrapper>
        <Controller
          name="color"
          control={control}
          rules={{ required: '색상을 선택해주세요' }}
          render={({ field: { onChange, value } }) => (
            <>
              {Object.keys(radioBtnColor).map((colorKey) => (
                <CustomRadio
                  onChange={onChange}
                  value={colorKey}
                  key={colorKey}
                  checked={colorKey === value}
                  sx={{
                    color: radioBtnColor[colorKey],
                    '&.Mui-checked': {
                      color: radioBtnColor[colorKey],
                    },
                  }}
                />
              ))}
            </>
          )}
        />
      </Wrapper>
      <ErrorMessage
        errors={errors}
        name="color"
        render={({ message }) => (
          <section className="errorWrapper">{message}</section>
        )}
      />
    </Container>
  );
};
const Container = styled.section``;

const Wrapper = styled.section`
  display: flex;
  background-color: ${customColor.brandColor6};
  flex-wrap: wrap;
  border-radius: 10px;
  padding: 0 16px;
`;

const CustomRadio = styled(Radio)`
  width: 6%;
`;
