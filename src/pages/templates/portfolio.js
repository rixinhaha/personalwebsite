import React from 'react'
import Layout from '../../components/layout';
import styled from 'styled-components';
import "../../components/style.css";

const FeaturedImage = styled.img`
    max-width: 300px;
    margin: 0 auto;
`

export default ({pageContext}) => (
    <div className="background">
        <title>imrex</title>
        <Layout>
            <h1 className="posttitle">
                {pageContext.title}
            </h1>
            {/* <div><FeaturedImage src={pageContext.featured_media.source_url} /></div> */}
            <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
        </Layout>
    </div>
);