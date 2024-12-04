import ComponentA from "./ConponentA"
export default function ComponentC({data}){
    return(
        <>
            <h1>ComponentC</h1>
            <h2> props-flow - ComponentA - ComponentB 에서 {data.message}</h2>
            {/* <ComponentA></ComponentA>  A를 호출하는 순간 부모 자식간 호출 규칙에 위반되어 에러가 발생*/ } 
        </>
    )
}