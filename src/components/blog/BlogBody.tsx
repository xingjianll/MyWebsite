'use client'

import React from "react"
import {MathpixLoader, MathpixMarkdown} from "mathpix-markdown-it";
import GridDistortion from "@/components/GridDistortion/GridDistortion";

export default class BlogBody extends React.Component {
    render() {
        return <div style={{width: '100%', height: '600px', position: 'relative'}}>
            <GridDistortion
                imageSrc="https://picsum.photos/1920/1080?grayscale"
                grid={10}
                mouse={0.1}
                strength={0.15}
                relaxation={0.9}
                className="custom-class"
            />
        </div>
    }
}