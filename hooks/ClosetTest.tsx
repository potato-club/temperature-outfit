// import styled from '@emotion/styled';
// import { productApi } from 'api';
// import { filterType, frontApi } from 'api/productApi';
// import { CustomButton, TypoGraphy, SelectBox } from 'components/common';
// import { AddModal, ChooseModal } from 'components/modal';
// import {
//   clothesMainCategory,
//   clothesSubCategory,
//   customColor,
// } from 'constants/index';
// import useGetFilter from 'hooks/useGetFilter';
// import useProduct from 'hooks/useGetFilter';
// import { useEffect, useMemo, useState } from 'react';
// import { useSetRecoilState } from 'recoil';
// import { addModal, chooseModal } from 'recoil/atom';
// import { productType } from 'types/editPage/product.type';
// import { ClothesContainer, ColorRadio, SearchBox } from './components';
// import CategoryFilterBox from './components/CategoryFilterBox';

// export const Closet: React.FC = () => {
//   const setAddModalState = useSetRecoilState(addModal);
//   const setChooseModalState = useSetRecoilState(chooseModal);

//   const [mainCategory, setMainCategory] = useState('all');
//   const [subCategory, setSubCategory] = useState('all');
//   const [color, setColor] = useState<string>('');
//   const [name, setName] = useState<string>('');
//   let filter: filterType = useMemo(() => {
//     let filtering: filterType = {};
//     if (subCategory === 'all') {
//       if (mainCategory === 'all') {
//         filtering.categoryId = '';
//       } else {
//         filtering.categoryId = mainCategory;
//       }
//     } else {
//       // (subCategory !== 'all')
//       filtering.categoryId = subCategory;
//     }

//     if (color) {
//       filtering.color = color;
//     }

//     if (name) {
//       filtering.query = name;
//     }
//     return filtering;
//   }, [mainCategory, subCategory, color, name]);
//   const { data } = useGetFilter(filter);

//   const [clothesData, setClothesData] = useState<Array<productType>>();

//   useEffect(() => {
//     setColor('');
//   }, [mainCategory, subCategory]);

//   useEffect(() => {
//     setClothesData(data);
//   }, [data]);

//   return (
//     <Container>
//       <TypoGraphy type="Title" fontWeight="bold">
//         옷장
//       </TypoGraphy>
//       <FilterWrapper>
//         <section style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
//           <CategoryFilterBox
//             mainCategory={mainCategory}
//             subCategory={subCategory}
//             setMainCategory={setMainCategory}
//             setSubCategory={setSubCategory}
//           />
//           <ColorRadio setColor={setColor} color={color} filter />
//         </section>
//         <SearchBox name={name} setName={setName} />
//       </FilterWrapper>

//       <Line />

//       <ClothesContainer clothesData={clothesData} />
//       <Footer>
//         <CustomButton
//           customType="colorful"
//           text="추가"
//           sidePadding="20"
//           height={40}
//           onClick={() => setAddModalState((cur) => !cur)}
//         />
//         <AddModal />
//       </Footer>
//     </Container>
//   );
// };

// const Container = styled.section`
//   width: 70%;
//   max-width: 1178px;
//   height: 90%;
//   max-height: 956px;
//   margin-top: 20px;
//   padding: 60px 64px 40px;
//   background-color: white;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px 4px gray;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
// `;

// const FilterWrapper = styled.section`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   width: 100%;
//   margin-top: 40px;
//   gap: 20px;
// `;

// const Line = styled.hr`
//   border: 1px solid ${customColor.gray};
//   border-bottom: 0px;
//   margin: 24px 0 24px 0;
//   width: 100%;
// `;

// const Footer = styled.section`
//   margin-top: 12px;
//   display: flex;
//   justify-content: end;
// `;
