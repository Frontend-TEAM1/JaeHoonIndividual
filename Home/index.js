import styled from "styled-components";
import { flexCenter } from "../../styles/common";
import { MockPost } from "../../__mocks__/post";
import Card from "./components/Card/Card";
import { useEffect, useState, useRef } from "react";

const PAGE_SIZE = 10;
//페이지 당 불러올 게시물의 수

function HomePage() {
  const [posts, setPosts] = useState([]); //현재까지 불러온 게시물의 배열
  const [page, setPage] = useState(1); //현재 불러와야 할 페이지 번호
  const loaderRef = useRef(null);

  const observer = useRef(
    //observer는 useRef를 통해 생성된 객체를 저장
    new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0]; //entries는 IntersectionObserver로 관찰 중인 엘리먼트들의 상태를 나타내는 배열
        // 관찰 중인 첫 번째 엘리먼트의 상태를 가져오기 
        if (firstEntry.isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    )
  );
  /*
  교차(intersection)를 관찰하고, 이 교차가 일어날 때 콜백함수를 실행합니다.
  threshold 옵션을 1로 설정-> 요소가 뷰포트와 100% 교차할 때 콜백함수를 실행
  */

  const loadMorePosts = async () => {
    //async를 사용하여 Promise를 반환하도록 설정
    //loadMorePosts() 함수가 실행 중에 비동기 작업을 처리하고 
    //그 결과를 Promise 형태로 반환
    const fakeFetchPosts = (pageNum) => {
      //pageNum 인자를 받아 해당 페이지의 게시물들을 가져옴.

      const delay = Math.floor(Math.random() * 1000) + 500;
       // 랜덤한 시간(0.5 ~ 1.5초) 후에 응답

      return new Promise((resolve) => {
        setTimeout(() => {

          const startIndex = (pageNum - 1) * PAGE_SIZE;
          //해당 페이지에서 가져올 포스트 데이터의 첫번째 인덱스
          /*
          ex) 만약 pageNum이 3이고, PAGE_SIZE가 10이라면, startIndex은 20
          이러면 3페이지에서는 20~30을 불러오게끔.

          */
         
          const newPosts = MockPost(PAGE_SIZE).map((post, index) => ({
            ...post,
            id: `post-${startIndex + index}`, 
            //현재 순회 중인 객체의 새로운 id 값. 포스트 구분목적
          }));

          resolve(newPosts);
          //fakeFetchPosts 함수 내부에서 비동기 작업이 끝난 후, 새로운 글 목록을 포함한 Promise를 반환
        }, delay);
      });
    };
    /*
    loadMorePosts는 현재 페이지 상태를 이용해 새로운 포스트를 가져와서
     setPosts 함수를 호출하여 이전 포스트 배열에 새로운 포스트를 추가

     비동기적(코드의 실행이 완료되기를 기다리지 않고 다음 줄의 코드를 실행)으로
      새 게시물 목록을 생성하고 반환
      (만약에 이 함수에서 새 게시물 목록을 반환하기 전에 시간이 지나면, 
      새 게시물 목록이 아닌 이전 목록이 반환될 수 있음.)

      비동기 작업이 완료되기 전에는 fakeFetchPosts 함수가 반환되지 않고,
      await 사용하여 작업이 완료되기를 기다렸다가 새 게시물 목록을 반환


    */

    const newPosts = await fakeFetchPosts(page);
    /*
    await은 Promise 객체가 반환하는 값을 기다렸다가 그 값을 변수에 할당.
    fakeFetchPosts가 반환하는 값을 기다리고, 그 값을 newPosts에 할당
    */
    setPosts((prev) => [...prev, ...newPosts]);
     /*
    페이지를 더 로딩할 때마다 호출되어 새로운 데이터를 가져오고,
     이 데이터를 기존의 데이터 배열에 추가하는 역할
     */
  };
 

  useEffect(() => {
    observer.current.observe(loaderRef.current);
    //observe() 메소드를 사용하여 loaderRef.current를 관찰
    return () => observer.current.disconnect();
    //컴포넌트가 언마운트될 때 메모리 누수를 방지
  }, []);
  /*
   1. 처음 마운트될 때, observer.current.observe(loaderRef.current) 메소드가 호출

   2. 인터섹션 옵저버(observer) 객체가
   로더 엘리먼트(loaderRef)를 관찰하도록 설정

   3. 로더 엘리먼트가 뷰포트에 진입할 때마다 인터섹션 옵저버 콜백 함수가 실행

   4.컴포넌트가 언마운트(unmount)될 때, 
   인터섹션 옵저버 객체가 로더 엘리먼트의 관찰을 중단하도록 설정
  */

  useEffect(() => {
    loadMorePosts();
  }, [page]);
  /*
  페이지가 변경될 때마다 loadMorePosts 함수를 호출
  */

  return (
    <Container>
      {posts.map((diary) => (
        <Card diary={diary}/>
      ))}
       <div ref={loaderRef}>Loading...</div>
       {/*
       IntersectionObserver 객체가 관찰해야 할 대상 요소로써 <div> 요소를 지정
       */}
    </Container>
  );
}

export default HomePage;

/*
정리?
1. 페이지를 처음 로드하면 useState 훅으로 초기 posts 배열과 page 상태가 설정

2.useEffect IntersectionObserver를 생성하고 
loaderRef를 관찰 대상으로 설정합니다

3.observer.current.observe() 메소드를 사용하여 loaderRef.current를 관찰

4.loadMorePosts() 함수가 호출되어 첫 페이지의 게시물이 가져와지고, 
setPosts를 사용하여 posts 배열에 추가

5.스크롤을 내리면 loaderRef가 뷰포트 안으로 들어오고, 
IntersectionObserver에 의해 page 상태가 업데이트

6.useEffect 훅에서 page 상태가 변경될 때마다 loadMorePosts() 함수가 호출

7.Card 컴포넌트로 posts 배열의 게시물이 매핑?되어 렌더링
*/

const Container = styled.div`
  /* margin: 0 100px; */
  padding: 100px;
  /* ${flexCenter} */
  display: flex;
  /* justify-content: space-between; */
  border: 1px solid red;
  flex-wrap: wrap;
  background-color: "#F3F3F3";
`;
