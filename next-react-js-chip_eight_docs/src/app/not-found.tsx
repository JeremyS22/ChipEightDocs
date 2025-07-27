import Link from "next/link"
import LeftArrow from "../../components/asset-components/LeftArrow" 
import "../../styles/NotFound.css"

export default function NotFound(){


    return (
        <div className = "pageContainer">
            <LeftArrow destination = "/"/> 
                <div className = "contentWrapperInNotFound">
                        <div className = "notFoundText">
                                <h1>Page not found </h1> 
                        </div>
                        <div className = "textLinkingHome">
                            <Link href = "/">
                                <h1>Click here or on the arrow on to go to homepage </h1>
                            </Link>
                        </div>
                </div>
        </div>
    )
}