import React from "react"
import {CopyBlock, dracula} from "react-code-blocks"
export default function Home(){

    return(
        <div>
            <CopyBlock
                text={"console.log('Hello World!');"}
                language={"javascript"}
                theme={dracula}
            />
        </div>
    )
}