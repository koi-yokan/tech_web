import React from "react";
import {Layout, theme} from "antd";
const { Header} = Layout;
const Headers = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <div>
            <Header style={{ padding: 0, background: colorBgContainer }} />
        </div>
    );
};

export default Headers;