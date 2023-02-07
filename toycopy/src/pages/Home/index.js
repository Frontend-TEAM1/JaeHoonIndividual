
import { faker, Faker } from "@faker-js/faker";
import Card from "./components/Card/Card";

import { MockPost } from "../../__mocks__/post";




function HomePage() {
    const Posts = MockPost(5);
    /*MockPost 함수의 매개변수 count로 전달한 수 만큼 데이터가 생성됩니다*/
    console.log(Posts);

    return (
        <>
            {Posts.map((diary) => {
                return <Card diary={diary}/>
            })}
        </>
    )
}

export default HomePage;