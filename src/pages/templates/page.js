import React from 'react'
import Layout from '../../components/layout'
import "../../components/style.css"
import profile from "../../images/46059073_2127533453924822_3429057921546190848_o.jpg"



export default ({pageContext}) => 
(
    <div className="background">
        <title>imrex</title>
        <Layout>
            <h1 dangerouslySetInnerHTML={{__html: pageContext.title}}/>
            <img src={profile} alt="profile"/>
            <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
        </Layout>
    </div>
);