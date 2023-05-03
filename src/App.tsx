import React from 'react';

import { Layout } from 'antd';
import Contents from "./Layouts/Contents";
import Headers from  "./Layouts/Headers";
import Side from "./Layouts/Side";const { Footer } = Layout;




const App: React.FC = () => {


    return (
        <Layout style={{ minHeight: '100vh' }}>
           <Side/>
            <Layout className="site-layout">
                <Headers/>
                <Contents/>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default App;