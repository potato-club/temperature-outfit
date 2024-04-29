import * as React from 'react';
import Radio from '@mui/material/Radio';
import styled from '@emotion/styled';
import { radioBtnColor } from 'constants/customColor';
import { HiOutlineX } from 'react-icons/hi';
import { useRecoilState } from 'recoil';
import { colorFilter } from 'recoil/atom/filtering';
import { customColor } from 'constants/index';
export const ColorRadio = () => {
  const [color, setColor] = useRecoilState(colorFilter);
  return (
    <Wrapper>
      {Object.keys(radioBtnColor).map((colorKey) => (
        <Radio
          onChange={(e) => setColor(e.target.value)}
          value={colorKey}
          key={colorKey}
          checked={colorKey === color}
          sx={{
            color: radioBtnColor[colorKey],
            '&.Mui-checked': {
              color: radioBtnColor[colorKey],
            },
            '& .MuiSvgIcon-root': {
              fontSize: '20px',
            },
            margin: '-2px',
          }}
        />
      ))}
      <IconWrapper
        onClick={() => {
          setColor('');
        }}>
        <HiOutlineX size={20} />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  background-color: ${customColor.darkSky + '55'};
  flex-wrap: wrap;
  border-radius: 12px;
  padding: 0 8px;
  margin: 2px 0;
`;

const IconWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
