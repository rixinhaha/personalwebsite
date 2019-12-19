import React from 'react'
import Layout from '../../components/layout'
import "../../components/style.css"

export default ({pageContext}) => 
(
    <div className="background">
        <title>imrex</title>
        <Layout>
            <h1 dangerouslySetInnerHTML={{__html: pageContext.title}}/>
            <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
        </Layout>
    </div>
);