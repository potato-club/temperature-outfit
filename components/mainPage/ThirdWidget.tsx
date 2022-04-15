import { DivBox, TypoGraphy } from 'components/common';
import { GoLocation } from 'react-icons/go';
import { color } from 'constants/index';
import styled from '@emotion/styled';

export const ThirdWidget = () => {
  return (
    <WidgetContainer>
      <DivBox width={448} height={240}>
        <DivBox width={420} height={212}>
          <UserName>
            <TypoGraphy
              type={'Title'}
              color={color.brandColor4}
              fontWeight={'bold'}>
              박상훈
            </TypoGraphy>
            <UserMr>
              <TypoGraphy type={'h3'}>님</TypoGraphy>
            </UserMr>
          </UserName>
          <UserLocation>
            <GoLocation style={{ marginRight: '5px', marginLeft: '-10px' }} />
            <TypoGraphy type={'h1'} textAlign={'center'}>
              의정부
            </TypoGraphy>
          </UserLocation>
          <TypoGraphy type={'body1'} color={color.gray} textAlign={'center'}>
            <LocationComment>사는 지역을 입력해주세요</LocationComment>
          </TypoGraphy>
          <LeaveBtn>
            <LeaveBtnPadding>
              <TypoGraphy
                color={color.brandColor4}
                type={'h3'}
                fontWeight={'bold'}>
                로그아웃
              </TypoGraphy>
            </LeaveBtnPadding>
            <LeaveBtnPadding>
              <TypoGraphy
                color={color.brandColor4}
                type={'h3'}
                fontWeight={'bold'}>
                회원탈퇴
              </TypoGraphy>
            </LeaveBtnPadding>
          </LeaveBtn>
        </DivBox>
      </DivBox>
    </WidgetContainer>
  );
};

const WidgetContainer = styled.div`
  position: relative;
  padding: 32px;
  display: flex;
`;

const UserName = styled.div`
  position: relative;
  bottom: 32px;
  display: flex;
`;

const LocationComment = styled.div`
  position: relative;
  bottom: 8px;
`;

const UserMr = styled.div`
  position: relative;
  bottom: -8px;
  margin-left: 1px;
`;

const UserLocation = styled.div`
  position: relative;
  display: flex;
  bottom: 16px;
`;

const LeaveBtn = styled.div`
  position: relative;
  bottom: -32px;
  display: flex;
`;

const LeaveBtnPadding = styled.span`
  padding: 8px;
`;
