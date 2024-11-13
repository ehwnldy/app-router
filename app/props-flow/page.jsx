import ComponentA from "../component/ConponentA"
export default function PropsFlow(){
    return(
        //테스트 하려는 것은 컴포넌트를 호출시 호출된 컴포넌트에서 또다시 다른 컴포넌트를 호출한다면 그 컴포넌트들의 주종관계를 알아보는 것
        //호출한 컴포넌트는 parent 호출된 컴포넌트는 child, 부모는 자식을 호출할 수 있지만 자식은 그 반대가 불가능하다
        <>
            <h1>props-flow</h1>
            <ComponentA></ComponentA>
        </>
    )
}