import styled from "styled-components";

function ProductCard({ onNavigate ,product}) {
  
const {productName,productPrice,productNumber,
  productSize,productRating,productReview}=product;

  const formatPrice = (num) => {
    const strNum = String(num);
    const len = strNum.length;
    let result = "";
    let cnt = 0;
  
    for (let i = len - 1; i >= 0; i--) {
      result = strNum[i] + result;
      cnt++;
      if (cnt === 3 && i !== 0) {
        result = "," + result;
        cnt = 0;
      }
    }
    return result;
  };

  return (
    <S.Item onClick={onNavigate}>
      <p>제품명 : {productName}</p>
      <p>제품 가격 : {formatPrice(productPrice)}원</p>
      <p>제품 번호: {productNumber}</p>
      <p>재고 사이즈 : {productSize}</p>
      <p>상품 평점 : {productRating}</p>
      <p>후기 점수 : {productReview}</p>
    </S.Item>
  );
}
export default ProductCard;

const Item = styled.li`
  border: 1px solid #000;
  cursor: pointer;
  width: 300px;
  margin: 16px auto;
`;

const S = {
  Item,
};

/*
      <h4>구멍난 양말</h4>
      <p>상품번호: 302012</p>
      <p>가격: 3000원</p>
      <p>사이즈: X, M, L</p>
      <p>평점: 4.5</p>
      <p>리뷰: 14</p>
*/