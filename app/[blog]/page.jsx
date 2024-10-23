import Image from "next/image"
import catImage from "/public/images/animal-3239709_1280.jpg"
export default function Blog(props){
    console.log(props)
    return(
        <div>
            <p>Blog PAGE</p>
            <p>blog : {props.params.blog}</p>
            <p>blog : {props.searchParams.id}</p>
            <p>blog : {props.searchParams.name}</p>

            <Image src= '/images/cat-8157889_640.webp' width={500} height={500}></Image>
            <Image src={catImage} width={500} height={500}></Image>
            <Image src="https://cdn.pixabay.com/photo/2019/09/16/20/21/cat-cat-4481997_640.jpg" width={120} height={200} ></Image>
        </div>
        
    )

} 

// params에는 [blog]슬러그가 들어가 있다.
