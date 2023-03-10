import { faker } from "@faker-js/faker";
import shortId from "shortid";

/*
(1) 데이터 설명
        id: 게시글 고유번호

        content: 게시글 내용

        User: 작성자 {id: 사용자 고유번호, nick_name: 별명, profile_image: 프로필 이미지}

        Post_img: 게시글 이미지 
          - 단, mockdata의 한계로 게시물 이미지의 경우 1개일 경우도 배열로 반환된다

        Comments: 댓글 {id: 댓글 고유번호, content: 댓글 내용, User:작성자, myComment: 내 작성한 댓글 여부, craetedAt: 생성 날짜}
        
        craetedAt: 생성 날짜
          - 생성 날짜의 경우 2023.01.01~2023.01.31으로 랜덤하게 형성된다
            이를 sort를 사용하여 정렬해도 좋지만 보통 이런 정렬은 백엔드에서 정렬된 데이터를 전송하기 때문에
            정렬하지 않고 랜더링 시켜도 됩니다.

        mpPost: 내가 작성한 게시글 여부
      
  ======================================================================================================================

(2) 요구사항

  가. 주의
        mock data를 가지고 https://www.figma.com/를 사용하여 
        가벼운 디자인을 통해 스토리 보드를 만들어 웹 사이트를 기획하고 해당 웹사이트의
        컴포넌트 및 스타일링 통해 향후 리엑트를 사용하여 랜더링 및 동적인 화면을 만들 프로젝트를 마크업합니다.

        가급적이면 화면이 랜더링 되는 것을 확인하면서 하시면 좋겠지만 
        현재는 어떻게 하면 아래 요구사항과 같은 기능을 구현할 수 있을지 알고리즘 부분도 고민해보시면 좋습니다

        * 리엑트에서는 복잡한 DOM API를 직접 건드리는 것을 지양하고 있습니다.
          물론 이를 위애 불필요한 랜더링을 할 필요는 없으므로 DOM API 없이 어떻게 하면 데이터를 가지고 올 수 있을지에 대한
          토론을 한번 해보세요 :)

  ======================================================================================================================

  나. 피그마
        피그마는 현재 급부상하고 있는 UI 관련 디자인 툴이며
        디자이너와 밀접한 협업을 해야하는 프론트엔드 개발자에게 익숙해야하는 도구 중 하나입니다.

        물론 해당 도구를 이용하여 디자인을 직접 실행하지는 않지만
        코멘트를 남기는 방법, follow 기능 이라던지, 기본적인 적용 방법을 알게되면
        웹 디자이너와 협업하기에 매우 유능한 개발자가 될 수 있습니다.

        기초 사용법은 이 두가지 사이트 정도만 숙지하여 사용해도 충분합니다.

        https://cucat.tistory.com/entry/%ED%94%BC%EA%B7%B8%EB%A7%88-%EC%82%AC%EC%9A%A9%EB%B2%95-%EA%B8%B0%EC%B4%88
        https://onlydev.tistory.com/142

        저희는 개발자이기 때문에
        디자인에 너무 많은 시간을 사용하실 필요는 없습니다.

        그러나, UI, UX가 너무 불편하지 않도록
        간단한 디자인을 통해 웹 사이트를 기획하는 시간을 가져봅시다 :)

        디자인은 디자이너가 실행하겠지만
        프론트엔드 개발자도 결국 UI, UX를 고려해야하는 직군이므로 
        해당 파트에서 충분한 아이디어를 가지고 있으면 좋습니다

  ======================================================================================================================

  다. 향후 만들 기능 사항 세부목록
        아래 기능을 참고하여 컴포넌트를 분리하고 웹 사이트를 기획해보세요.

        (1) 메인 페이지에 접속하면 게시글 목록이 랜더링 된다.
        (2) 게시글 목록은 페이지네이션 혹은 무한 스크롤링으로 10개씩 랜더링 된다.
        (3) 게시글을 작성하면 가장 최상단에 게시글이 추가된다.
        (4) 각 게시글에는 이미지가 있으며 이미지는 2개 이상이면 carucel 혹은 swipe slider로 보여진다.
        (5) 게시글에는 작성 시간이 있으며 아래와 같이 파싱되어야한다.
            - 만약 당일이라면 3시간 전으로 파싱되어야한다.
            - 당일이 아니라면 3일 전 까지는 1일 전, 2일 전, 3일 전으로 파싱되어야한다.
            - 그 이후는 2023.01.31과 같이 월과 일 단위로 파싱되어야한다.

        (6) 게시글에는 프로필 이미지 및 작성자 정보가 존재한다.
        (7) 게시글 컨텐츠의 글자 수가 100글자 이상이라면 ...으로 표시하고 더보기 버튼을 누르면 모든 게시물의 정보를 확인한다
        (8) 본인이 작성한 게시글은 본인이 삭제 및 수정할 수 있다

        (9) 댓글의 경우 게시글과 마찬가지로 프로필 이미지, 작성 날짜, 내용이 모두 보여야하며
            본인이 작성한 글은 수정 및 삭제가 가능하다

  ======================================================================================================================
      
  라. 토의하면 좋은 목록

        (1) 코드 컨벤션 및 깃허브 협업 전략 맞추기
              - 화살표 함수 및 변수 상수 함수명 컨벤션
              - 기능 단위 브랜치 생성 및 커밋 푸쉬 머지 전략
              - 향후 pritterrc, lint를 이용하여 파일을 통해 모든 개발자의 코드를 맞추곘지만 아직 배우지 않았으므로
                기본설정 - 설정 - setting.json - prettier 설정을 모두 같게 하시는 것이 좋습니다

        (2) 기획된 웹사이트 및 피그마를 토대로 프로젝트 폴더 구조 및 공용 컴포넌트 나누기
              - 특히 해당 부분은 많은 토의를 하지 않으면 유지 보수 하기 어려워질 수 있습니다

        (3) 어떤 라이브러리 및 내장객체를 사용해야할까?
              - carucel || siwper slide
              - 날짜 파싱

        (4) 기획된 웹사이트를 토대로 요구사항 [다.향후 만들 기능 사항 세부목록] 을 확인하고 해당 기능을 어떻게 구현할 수 있을지 각자 조사 후 실현 가능성 여부를 조사한다
              - 우리는 아직 hook 함수를 배우지 안핬기에 해당 부분을 우선 생략하셔도 좋습니다
              - 만약 현재 조원 모두 hook 관련 부분을 조금 알고 있다면 어떻게 할 수 있을까 정도만 토의를 해보시면 됩니다

        이외에도 협업에 있어 토의해야하는 내용은 많습니다.
        이제부터는 본격적으로 개인과 개인에서 나아가 조원 전체의 협업이 중요합니다.
        따라서 각자 프로젝트 및 조 환경에 맞춰 협업을 위해 충분한 토의를 진행하시고 이를 문서화 하는 것이 좋습니다.

  ======================================================================================================================
*/

export const MockPost = (count) =>
  Array(count)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      content: faker.lorem.paragraph(),
      User: {
        id: shortId.generate(),
        nick_name: faker.name.firstName(),
        profile_img: faker.image.avatar(),
      },
      Post_img: Array(Math.floor(Math.random() * 3) + 1)
        .fill()
        .map(() => faker.image.imageUrl()),
      Comments: Array(Math.floor(Math.random() * 5) + 1)
        .fill()
        .map(() => {
          return {
            id: shortId.generate(),
            content: faker.lorem.sentence(),
            User: {
              id: shortId.generate(),
              nick_name: faker.name.firstName(),
              profile_img: faker.image.avatar(),
            },

            myComment: "N",
            createdAt: faker.date.between(
              "2023-01-01T00:00:00.000Z",
              "2023-01-31T00:00:00.000Z"
            ),
          };
        }),
      createdAt: faker.date.between(
        "2023-01-01T00:00:00.000Z",
        "2023-01-31T00:00:00.000Z"
      ),
      myPost: "N",
    }));
