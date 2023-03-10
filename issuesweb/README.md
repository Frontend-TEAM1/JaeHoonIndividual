# GOAL

깃허브 오픈 API를 활용하여
특정 레퍼지토리의 이슈를
조회할 수 있는 반응형 웹 사이트를 만들 것

## Project Check List

- 본인이 잘 모르는 오픈 api라 할 지라도 사용할 수 있는가?
- 페이지네이션 기능을 구현할 수 있는가?
- 필터 기능 구현을 효율적으로 할 수 있는가?
- 리엑트로 반응형 웹 사이트를 만들 수 있는가?
- rtk 사용법을 익히고 있는가?

### List Page Requirements

- https://github.com/angular/angular-cli를 활용
  -> POWERSHELL 관리자 권한으로 실행 후
  Set-ExecutionPolicy RemoteSigned
  Set-ExecutionPolicy Bypass -Scope Process
- 이슈 목록은 10개 단위의 페이지네이션으로 구현할 것
- 총 이슈의 갯수는 최근 200개로 한정 ( total item: 200 )
- api에서 구할 수 없는 데이터이므로 임의로 정할 것
- 만약 총 이슈의 갯수가 200개가 안된다고 하더라도 빈 페이지가 보이도록 구현
- 현재 페이지의 숫자는 포커스 되어있어야 할것
- 10페이지 단위로 마지막 페이지에서 다음 페이지를 누르면 다음 10 페이지가 뜨도록
- 버튼은 [맨처음] [이전] 1, [2], 3, 4, 5 [다음] [맨끝]으로 구현할 것
- 필터 기능 구현 생성순/업데이트순/댓글순
- 목록은 RTK를 활용하여 전역 상태 관리 할 것
- 모바일 및 태블릿 화면으로 봐도 UX에 불편함이 없어야 함
- 데이터가 받아오는 동안 리스트 화면은 로딩 페이지를 띄워야함

### Detail Page Requirements

- 이슈의 id 값을 활용하여 api를 요청하고 해당 issue의 상세페이지를 구현할 것
- 모바일 및 태블릿 화면으로 봐도 UX에 불편함이 없어야 함

### Common Requirements

- 각 기능 마다 브랜치를 파서 merge 할 것
- README.md에 아래와 같은 사항을 추가할 것
  - 프로젝트 설명
  - 배포 주소 or 시연 영상
  - 프로젝트 폴더 구조
  - 팀원
  - 사용 기술 스택
  - 요구 사항 구현 내역
  - 코드 및 깃허브 커밋 컨벤션
- 구현 후 serverless 환경에서 배포하기
