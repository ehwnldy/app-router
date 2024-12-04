import ComponentC from "./ConponentC"
export default function ComponentB({data}){
    return(
        <>
            <h1>ComponentB</h1>
            <h2>props-flow - ComponentA 에서 {data.id}</h2>
            <ComponentC data={data} />
        </>
    )
}