import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import productList from "../__mock__/products.json";

function DetailPage() {
 // const params = useParams();
  //console.log(params.productNumber);
  const navigate = useNavigate();
  const { productNumber } = useParams();

  const { state } = useLocation();
//리스트 스테이트로 관리 ->화면에 랜더링 시키기 해당부분만 
//댓글 작성하고 그러면 스테이트 변경 -> 화면에 랜더링 -> 프로덕트 리스트
  useEffect(() => {
      // productNumber와 일치하는 product 찾습니다.
      const product = productList.products.find(
        (product) => product.productNumber === (productNumber)
        //productNumber와 일치하는 product 객체를 반환
      );

      // 일치하는 상품이 없는 경우 state 페이지로 이동.
      if (!product) {
        navigate("/state");
      }
    }
  , [navigate, productNumber]);
  // 1.productNumber가 변경될 때마다 실행
  //navigate나 productNumber가 변경될 때마다 useEffect가 실행
  //productList.products 배열에서 productNumber가 productNumber 파라미터와 일치하는 상품 객체를 찾아 반환

  const product = productList.products.find(
    (product) => product.productNumber == (productNumber)
  );

  console.log("pppppppppppppppppp",product.Review);
  return (
    
   <S.Wrapper>
     제품 번호 :{productNumber}
     
     {
     product.Review.map((review, index) => (
      <S.Review key={index}>
        <div>작성자: {review.reviewer}</div>
        <div>평점: {review.rating}</div>
        <div>내용: {review.review}</div>
      </S.Review>
    ))
  
  }
   </S.Wrapper>
    
   
    
  );
}
export default DetailPage;

const Wrapper=styled.ul`

`
const Information=styled.div`

`
const Review=styled.div`

`

const S={
  Wrapper,
  Information,
  Review,
}


/* 
      상세 페이지는 자유롭게 꾸미시면 됩니다.
      아직 해당 부분의 진도가 나가지 않았기 때문에 주소의 파람을 가지고 올 수 있는 방법은
      미리 콘솔에 찍어두었습니다.

      단, 없는 번호 상품으로 접근 시 state페이지로 돌아가도록 구현해주세요
    */