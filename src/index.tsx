import React from 'react';
import { Button } from 'antd';
import ReactDOM from 'react-dom';

const Hello: React.FC = () => (
    <Button type="primary">1234</Button>
);

ReactDOM.render(
    <Hello />,
    document.getElementById('root')
)
