import React from "react"
import Link from "next/link";
import LeftArrow from "../../../../components/asset-components/LeftArrow"; 
import "../../../../styles/DocNotFound.css"

type Params = Promise<{ slug: string }> 

async function NotFoundPage(props : { params: Promise<Params> }){

        const params = await props.params; 
        const slug = params.slug; 
    
        
        return (
            <div className = "pageContainer">
                <LeftArrow destination = "/"/> 
                    <div className = "contentWrapperInDocNotFound">
                            <div className = "notFoundText">
                                <h1>The doc page you're trying to look for doesn't exist</h1>   
                            </div>
                            <div className = "testLinkingHome">
                                <Link href = "/">
                                    <h1>Click here or on the arrow on to go to homepage </h1>
                                </Link>       
                            </div>
                    </div>
            </div> 
    ); 
    
}

export default NotFoundPage 