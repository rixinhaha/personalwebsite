import React from 'react'
import {graphql, StaticQuery, Link} from 'gatsby';
import styled from 'styled-components';

const PortfolioItemsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const PortfolioItem = styled.div`
    width: 300px;
    border: 1px solid black;
    border-radius: 3px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 9px;
    margin: 16px;
    background-color: #f0f0f0;
`
const PortfolioImage = styled.img`
    max-width: 80%;
`

const PortfolioItems = () => {
    return (
        <StaticQuery query={graphql`
        {
            allWordpressWpPortfolio{
            edges{
                node{
                    id
                    title
                    excerpt
                    content
                    slug
                    featured_media{
                        source_url
                    }
                }
            }
            }
        }
        `} render = {props => <PortfolioItemsWrapper>
            {props.allWordpressWpPortfolio.edges.map(portfolioItem=> (
            <PortfolioItem key={portfolioItem.id}>
                <h2>{portfolioItem.node.title}</h2>
                <PortfolioImage src={portfolioItem.node.featured_media.source_url} alt="Thumbnail" />
                <div dangerouslySetInnerHTML={{__html:portfolioItem.node.excerpt}}/>
                <Link to={`/portfolio/${portfolioItem.node.slug}`}>Read more</Link>
            </PortfolioItem>
            ))}
            </PortfolioItemsWrapper>} />
    )}

export default PortfolioItems