import React from "react";
import {Layout} from '@/components/layout/layout'
import {Header} from '@/components/header/header'
import {Main} from '@/components/main'

export const Home:React.FC = ()=>{
    return(
        <Layout>
            <Header/>
            <Main/>
        </Layout>
    )
};