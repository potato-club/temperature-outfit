
# Cody Diary
![image](https://user-images.githubusercontent.com/76721795/220651686-814974e6-e0d0-4b9d-a5b6-2dbd8b35e4b5.png)


## 팀원

#### 프론트 3
|[박상훈](https://github.com/bigyou98)|[고재민](https://github.com/KoJaem)|[조금주](https://github.com/JoGeumJu)|
|--|--|--|
#### 백엔드 1
|[안호빈](https://github.com/pdom0327)|
|--|

## 소개

### 어떤 날씨에 어떤 옷을 입었는지 개인 코디를 저장하는 웹 사이트
💡여름, 겨울 같은 때에는 명확하게 그 날씨에 맞게 옷을 입을 수 있는데 봄이나 가을에는 ‘반팔은 아직 추울 것 같은데…’ 같은 고민을 해결하는 프로젝트입니다.

🔖옷장에 옷을 등록하고 현재, 과거의 날짜를 선택해 입었던 옷과 입은 사진, 후기, 별점 기록하여 온도가 비슷한 다른 날짜에 참고할 수 있도록 하는 나만의 코디 일기장을 주제로 하였습니다.

☑️**옷 등록** : 자신의 옷을 사진, 이름, 색깔, 옷의 카테고리를 설정해 저장할 수 있습니다.

**✅코디 등록** : 등록된 옷들을 선택하여 원하는 날짜에 입은 옷과 후기, 별점과 함께 기록할 수 있습니다.

**📅달력** : 등록된 코디를 달력에서 확인하거나 원하는 날짜를 클릭시 해당 날짜에 코디를 등록할 수 있습니다.

🧷**추천** : 메인 페이지에서 현재 온도와 유사한 온도에 입었던 코디를 최대 5개 추천해줍니다

## 페이지
|![image](https://user-images.githubusercontent.com/76721795/220651686-814974e6-e0d0-4b9d-a5b6-2dbd8b35e4b5.png)|![image](https://user-images.githubusercontent.com/76721795/221109591-abf99a5b-4087-4c4a-bf23-3c032cf068e0.png)|![image](https://user-images.githubusercontent.com/76721795/221109688-eb45fb2a-7eec-421a-9ef1-8a64a7e9fb86.png)|![image](https://user-images.githubusercontent.com/76721795/220667393-475061ba-2278-4124-a708-33ba853c77e2.png)|
|--|--|--|--|
|로그인 페이지| 메인 페이지|옷장 페이지|달력 페이지|



![image](https://user-images.githubusercontent.com/76721795/221112245-22e4bea3-221e-4775-ac58-76a40be34c76.png)|![image](https://user-images.githubusercontent.com/76721795/220668557-cc0cd731-e388-4101-ad4b-75425e68296f.png)| ![image](https://user-images.githubusercontent.com/76721795/221109634-8805dbc9-6288-4d0c-8267-5a81df669684.png)|![image](https://user-images.githubusercontent.com/76721795/220667075-b96203e9-b48c-40be-8fbf-01b511a52b5c.png)|
|--|--|--|--|
|등록 페이지|옷 등록 모달|옷 선택 모달|마이페이지|




## 기술 Stack

### 모노레포
|nx workspace|
|--|

### Frontend

|Next.js|TypeScript|emotion|recoil|axios|reacr-hook-form|
|--|--| --|--|--|--|


### Backend
|NestJS|Prisma|Supabase|
|--|--|--|

### Deploy
|AWS S3| CloudFront | Route53| Docker |
|--|--|--|--|



## 배포 주소
~https://cody-diary.site/~

### [디자인 링크](https://www.figma.com/file/vHHDUX67632FUGP1KHXone/%EB%82%A0%EC%94%A8%EB%B3%84-%EC%98%B7%EC%B0%A8%EB%A6%BC?node-id=2:4&t=BQDGcnMIj2J0r7TV-1)

<details>

<summary><span  style='font-size : 24px;font-weight:bold'>컨벤션</span></summary>

<div  markdown="1">

  

<h4>코드 작성 컨벤션</h4>

<li>camelCase 사용하기</li>

<li>텍스트를 작성할 때는 TypoGraphy 컴포넌트를 사용합니다.</li>

<li>텍스트 사이즈, 폰트 일관화를 위해서

항상 page컴포넌트에서는 최상단에 LayoutContainer를 선언해주세요</li>

  

<h4>커밋 컨벤션</h4>

  

```jsx
[#118] Feat
상세페이지에 무한스크롤 추가
```

  

- Feat : 새로운 기능 추가

- Update : 코드 수정

- Remove : 코드 삭제

- Fix : 버그 수정

- Docs : 문서 수정

- Style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우

- Refactor : 코드 리펙토링

- Test : 테스트 코드, 리펙토링 테스트 코드 추가

</div>

</details>
