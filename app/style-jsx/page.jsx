"use client"; //클라이언트 전용 모듈
export default function StyledJsx(){

    return(
        <>
            <button className="button">Styled JSX</button>
            <style jsx>{`
                .button {
                    padding : 1em;
                    border-radius : 1em;
                    background : green;
                    color : white
                }
            `}

            </style>
        </>        
    )
}