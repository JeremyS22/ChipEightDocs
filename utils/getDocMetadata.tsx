import fs from 'fs'; 
import matter from 'gray-matter'; 

export default function getDocMetadata(basePath : string) {
    // get folder data 
    const targetFolder = basePath + '/'; 
    const files = fs.readdirSync(targetFolder); 
    const markdownFiles = files.filter(file => file.endsWith('.md')); 

    // get files' data 
    const targetMarkdownFiles = markdownFiles.map((filename) => {
        const fileContents = fs.readFileSync(`${basePath}/${filename}`, 'utf8'); 
        const grayMatterResult = matter(fileContents); 

        // gray matter object 
        return {
            title: grayMatterResult.data.title,
            description: grayMatterResult.data.description,
            slug: filename.replace('.md', '')   
        }
    })

    return targetMarkdownFiles; 
}
