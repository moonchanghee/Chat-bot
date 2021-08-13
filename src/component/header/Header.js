import React from 'react';
import { Row, Col } from 'antd';
import { CloseCircleOutlined,SearchOutlined } from '@ant-design/icons';
const Header = () => {
    return (
        <div>
        <Row justify="space-between">
        <Col span={3}><CloseCircleOutlined /></Col>
        <Col span={4}>챗봇</Col>
        <Col span={1}><SearchOutlined /></Col>
      </Row>
        </div>
    );
};

export default Header;
