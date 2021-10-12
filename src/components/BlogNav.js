import React from 'react'
import {AnimateSharedLayout, motion} from "framer-motion"
import styled from 'styled-components'

function BlogNav({activeItem, setActiveItem}) {
    return (
        <AnimateSharedLayout>
            <Nav>
                <div>
                    <Button onClick={()=>setActiveItem("articles")}>Articles</Button>
                    <UnderlineContainer>
                        {activeItem=="articles" && <Underline layoutId="underline" transition={spring}/>}
                    </UnderlineContainer>
                </div>
                <div>
                    <Button onClick={()=>setActiveItem("gallery")}>Gallery</Button>
                    <UnderlineContainer>
                        {activeItem=="gallery" && <Underline layoutId="underline" transition={spring}/>}
                    </UnderlineContainer>
                </div>
                <div>
                    <Button onClick={()=>setActiveItem("videos")}>Videos</Button>
                    <UnderlineContainer>
                        {activeItem=="videos" && <Underline layoutId="underline" transition={spring}/>}
                    </UnderlineContainer>
                </div>
            </Nav>
        </AnimateSharedLayout>
    )
}

export default BlogNav

const UnderlineContainer = styled.div`
    height: 3px;
`
const Underline = styled(motion.div)`
    height: 3px;
    background-color: red;
`

const Button = styled(motion.button)`
    background-color: transparent;
    border: none;
    font-size: 1.4em;
`

const Nav = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
`

const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30
  };