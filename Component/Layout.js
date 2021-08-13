import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header'


const Layout = (props) => {
    return ( 
        <body style={{background:"#242B2E",color:"white"}}>
        <h1 style={{textAlign:"center" ,fontFamily:"cursive", padding:"20px",color:"white"}}>CrowdCoin - Ethereum Based Kickstarter Campaign</h1>
        <Container style={{background: '#242B2E',color:"white"}}>
        {/* every thing inside our head will move up into head tag inside our html document */}
        <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css" />
        </Head>
            <Header/>
            {props.children}
            {/* <h1>I am footer</h1> */}
        </Container>
        </body>
     );
}
 
export default Layout;