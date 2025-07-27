import React  from "react"; 
import fs from 'fs'; 
import Markdown from "markdown-to-jsx"; 
import matter from "gray-matter"; 
import getDocMetadata from "../../../../../utils/getDocMetadata"; 
import { redirect } from 'next/navigation'; 
import "../../../../styles/slug.css"; 
import LeftArrow from "../../../../components/asset-components/LeftArrow"; 


function getDocContent(slug : string){
    const folder = 'docPages/'; 
    const file = folder + `${slug}.md`; 
    const content = fs.readFileSync(file, 'utf8'); 

    const matterResult = matter(content); 
    return matterResult; 
}

export const generateStaticParams = async () => {
    const posts = getDocMetadata('docPages'); 

    return posts.map((docs) => ({ slug: docs.slug})); 
}

export async function generateMetadata({ params } : { params : { slug: string } }){
    const id = params?.slug ? params?.slug : ''; 

    // regex, removes any underscores or dashes 
    return {
        title: `ChipEight Docs ${id.replaceAll(/_|-/g, ' ')}` 
    }
}


export default async function DocPage({ params } : { params : { slug: string } }) {

    const slug = params.slug; 
    const posts = getDocMetadata('docPages'); 

    const isValidSlug = posts.some(post => post.slug === slug);

    if (!isValidSlug) {
        redirect('/docs/not-found'); 
    }

    const docs = getDocContent(slug);
    if (!docs) {
        redirect('/docs/not-found'); 
    }

    
    return (
        <main>
            <div className = "pageContainer">
                <LeftArrow destination = "/"/> 
                    <div className = "contentWrapperInSlug"> 
                        <article>
                            <Markdown>
                                {docs.content}
                            </Markdown>
                        </article>
                    </div>
            </div>
        </main> 
    )
}