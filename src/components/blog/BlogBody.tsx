'use client'

import React from "react"
import {MathpixLoader, MathpixMarkdown} from "mathpix-markdown-it";

export default class BlogBody extends React.Component {
    render() {
        return <MathpixLoader>
                    <MathpixMarkdown text="\\(ax^2 + bx + c = 0\\)"/>
                    <MathpixMarkdown text="$x = \frac { - b \pm \sqrt { b ^ { 2 } - 4 a c } } { 2 a }$"/>
                </MathpixLoader>
    }
}