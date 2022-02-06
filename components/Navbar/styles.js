import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 1.2em;
    margin-bottom: 2em;
    background-color: #333;
    color: #fff;
`

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1`
    margin-left: 0.5em;
`

export const UnorderedList = styled.ul`
    display: flex;
    list-style: none;
`

export const ListItem = styled.li`
    margin-right: 1.3em;
`

export const LinkStyle = styled.a`
    color: #FFF;
    text-decoration: none;
    padding: 5px;
    transition: .4s;
    border-bottom: 2px solid transparent;
    &:hover {
        border-color: #FFF;
    }
`