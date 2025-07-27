import React from "react"; 
import LeftArrowAsset from "../../public/left-arrow.svg"; 
import "../../styles/LeftArrow.css"; 
import Link  from "next/link"; 

type LeftArrowProps = {
    destination : string; 
}; 

export default function LeftArrow({destination}: LeftArrowProps) {
    return (
        <>
            <Link href = {destination}>
                <span className = "textAndArrowWrapper">
                    <LeftArrowAsset className = "leftArrowAsset" style = {{color: '7575a3'}} />
                    <span className = "hiddenBackText">Click to Go Home</span>
                </span>
            </Link>  
        </>
    )
}