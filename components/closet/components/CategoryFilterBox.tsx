import styled from '@emotion/styled';
import { SelectBox } from 'components/common';
import { clothesMainCategory, clothesSubCategory } from 'constants/index';
import React, { Dispatch, SetStateAction } from 'react'

type Props = {
  mainCategory: string;
  subCategory: string;
  setMainCategory: Dispatch<SetStateAction<string>>;
  setSubCategory: Dispatch<SetStateAction<string>>;
};

export default function CategoryFilterBox({mainCategory, subCategory,setMainCategory, setSubCategory} : Props) {
  return (
    
          <Container>
            <SelectBox
              label="메인"
              dataArray={clothesMainCategory}
              categoryChange={setMainCategory}
              changeSubByMain={setSubCategory}
              value={mainCategory}
            />
            <SelectBox
              label="서브"
              dataArray={clothesSubCategory[mainCategory]}
              categoryChange={setSubCategory}
              value={subCategory}
            />
          </Container>


  )
}




const Container = styled.section`
  display: flex;
  gap: 10px;
  z-index: 0;
`;