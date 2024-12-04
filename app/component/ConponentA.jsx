import ComponentB from "./ConponentB"
export default function ComponentA({data}){
    return(
        <>
            <h1>ComponentA</h1>
            <h2>props-flow 에서 {data.name}를 받아옴</h2>
            <ComponentB data={data}></ComponentB>
            
        </>
    )
}