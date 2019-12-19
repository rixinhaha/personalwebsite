import React from 'react'
import Layout from '../../components/layout';
import styled from 'styled-components';
import "../../components/style.css";

const FeaturedImage = styled.img`
    max-width: 80;
    margin: 0 auto;
`

export default ({pageContext}) => (
    <div className="background">
        <title>imrex</title>
        <Layout>
            <h1 className="posttitle">
                {pageContext.title}
            </h1>
            <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
        </Layout>
    </div>
);