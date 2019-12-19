import React from 'react'
import {graphql, StaticQuery, Link} from 'gatsby';
import styled from 'styled-components';
import './style.css';
import SiteInfo from './Siteinfo.js'

const MainMenuWrapper = styled.div`
    margin: 0 auto;
    max-width: 570px;
    display: flex;
    background-color: 	#A9A9A9;
    height: 76px;
    padding-left: 20px;
    padding-top: 21px;
    padding-right: 10px;
    padding-bottom: 6px;
    border-radius: 5px;
}
`
const MenuItems = styled(Link)`
    color: black;
    display: block;
    padding: 8px 4px;
    font-size: 18px;
    font-weight: 300;
    margin-left: 0px;
    margin-bottom: 15px;
    margin-top: 11px;
    text-decoration: none;
    :hover {
        font-weight: 900;
        border-bottom: 3px solid;
    }
    :after {
        font-weight: 900;
        border-bottom: 3px solid;
    }
`


const MainMenu = () => (
    <StaticQuery query={graphql`
        {
            allWordpressMenusMenusItems(filter: {
                name: {
                    eq: "Main menu"
                }
            }){
                edges{
                    node{
                    items{
                        title
                        slug
                    }
                    }
                }
            }
        }
    `} render={props => (
        <MainMenuWrapper>
            <SiteInfo />
            {props.allWordpressMenusMenusItems.edges[0].node.items.map(item => (
                <MenuItems to={item.slug} key={item.title}>
                    {item.title}
                </MenuItems>
            ))}
        </MainMenuWrapper>
    )} />
);

export default MainMenu;