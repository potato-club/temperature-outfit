import * as React from 'react';
import Radio from '@mui/material/Radio';
import styled from '@emotion/styled';
import {
  Control,
  Controller,
  FieldErrorsImpl,
  FieldValues,
} from 'react-hook-form';
import { radioBtnColor } from 'constants/customColor';
import { ErrorMessage } from '@hookform/error-message';
import { TypoGraphy } from 'components/common';
type Props = {
  control: Control<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
};
export const ColorRadioForm = ({ control, errors }: Props) => {
  return (
    <section>
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
    </section>
  );
};

const Wrapper = styled.section`
  display: flex;
  background-color: #3b7bc43d;
  flex-wrap: wrap;
  border-radius: 10px;
  padding: 0 8px;
`;

const CustomRadio = styled(Radio)`
  width: 2vw;
`;
