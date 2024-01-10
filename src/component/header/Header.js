import React from 'react';
import { Row, Col } from 'antd';
const Header = () => {
    return (
        <div>
        <Row justify="space-between">
        <Col span={3}></Col>
        <Col span={4}>챗봇</Col>
        <Col span={1}></Col>
      </Row>
        </div>
    );
};

export default Header;
