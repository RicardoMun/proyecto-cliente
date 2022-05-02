import React from "react";
import { Layout } from "antd";

export default function LayoutAdmin(props){
    const { children } = props;
    return (
        <Layout>
            <h2>Menu</h2>
            <div>Content</div>
            <h5>Footer</h5>
            { children }
        </Layout>
    )
}