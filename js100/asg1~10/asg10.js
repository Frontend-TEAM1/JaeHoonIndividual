
const num = prompt("트리의 높이를 입력해주세요 : ");
const treeHeight=Number(num);

    for(let i=1;i<=treeHeight;i++){
        let xmasTree = "";
        for(let j=0;j<treeHeight-i;j++){
            xmasTree +=" ";

        }
        for(let k=0;k<2*i-1;k++){
            xmasTree +="*";

        }
        console.log(xmasTree);
    }

