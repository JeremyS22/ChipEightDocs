import React from "react"
import getDocMetadata from "../../../utils/getDocMetadata"; 
import Link from "next/link"; 

function HomePage(){


    const docMetadata = getDocMetadata('docPages'); 
    console.log(docMetadata); 

    return (
        <main>
            <div className = "pageContainer">
                <div className = "contentWrapperInHomePage">
                    <h1>Welcome to the homepage  </h1>
                        This documentation is used to describe different aspects of the emulator and offer information to get started.

                        <div><Link href = '/docs/installation'>Installation </Link></div>
                        <div><Link href = '/docs/development-log'>Development Log </Link></div> 
                </div>
            </div>
        </main>
    );  
    
    
}

export default HomePage