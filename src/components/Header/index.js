import { ShoppingCartOutlined } from '@ant-design/icons';
import {
    Badge,
    Button,
    Checkbox,
    Drawer,
    Form,
    Input,
    InputNumber,
    Menu,
    message,
    Table,
    Typography,
} from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AppHeader() {
    const navigate = useNavigate();

    const onMenuClick = (item) => {
        navigate(`/${item.key}`);
    };
    return (
        <div className="appHeader">
            <Menu
                className="appMenu"
                onClick={onMenuClick}
                mode="horizontal"
                items={[
                    {
                        label: 'Tấm PVC',
                        key: '',
                    },
                    {
                        label: 'Tấm đa năng',
                        key: 'tam-da-nang',
                    },
                    {
                        label: 'Lam sóng',
                        key: 'lam-songg',
                        children: [
                            {
                                label: 'Lam 3 sóng',
                                key: 'lam-song',
                            },
                            {
                                label: 'Lam 4 sóng',
                                key: 'lam-4-song',
                            },
                            {
                                label: 'Lam 5 sóng',
                                key: 'lam-5-song',
                            },
                        ],
                    },
                    {
                        label: 'Tấm nano',
                        key: 'nano',
                    },
                    {
                        label: 'Keo dán & phụ kiện khác',
                        key: 'phu-kien-khac',
                    },
                ]}
            />
            {/* <Typography.Title>Tấm pvc</Typography.Title> */}
            <AppCart />
        </div>
    );
}
function AppCart() {
    const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
    const [checkoutDrawerOpen, setCheckoutDrawerOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const onConfirmOrder = (values) => {
        console.log({ values });
        setCartDrawerOpen(false);
        setCheckoutDrawerOpen(false);
        message.success('Your order has been placed successfully.');
    };

    return (
        <div>
            <Badge
                onClick={() => {
                    setCartDrawerOpen(true);
                }}
                count={cartItems.length}
                className="soppingCartIcon"
            >
                <ShoppingCartOutlined />
            </Badge>
            <Drawer
                open={cartDrawerOpen}
                onClose={() => {
                    setCartDrawerOpen(false);
                }}
                title="Your Cart"
                contentWrapperStyle={{ width: 500 }}
            >
                <Table
                    pagination={false}
                    columns={[
                        {
                            title: 'Title',
                            dataIndex: 'title',
                        },
                        {
                            title: 'Price',
                            dataIndex: 'price',
                            render: (value) => {
                                return <span>${value}</span>;
                            },
                        },
                        {
                            title: 'Quantity',
                            dataIndex: 'quantity',
                            render: (value, record) => {
                                return (
                                    <InputNumber
                                        min={0}
                                        defaultValue={value}
                                        onChange={(value) => {
                                            setCartItems((pre) =>
                                                pre.map((cart) => {
                                                    if (record.id === cart.id) {
                                                        cart.total =
                                                            cart.price * value;
                                                    }
                                                    return cart;
                                                })
                                            );
                                        }}
                                    ></InputNumber>
                                );
                            },
                        },
                        {
                            title: 'Total',
                            dataIndex: 'total',
                            render: (value) => {
                                return <span>${value}</span>;
                            },
                        },
                    ]}
                    dataSource={cartItems}
                    summary={(data) => {
                        const total = data.reduce((pre, current) => {
                            return pre + current.total;
                        }, 0);
                        return <span>Total: ${total}</span>;
                    }}
                />
                <Button
                    onClick={() => {
                        setCheckoutDrawerOpen(true);
                    }}
                    type="primary"
                >
                    Checkout Your Cart
                </Button>
            </Drawer>
            <Drawer
                open={checkoutDrawerOpen}
                onClose={() => {
                    setCheckoutDrawerOpen(false);
                }}
                title="Confirm Order"
            >
                <Form onFinish={onConfirmOrder}>
                    <Form.Item
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your full name',
                            },
                        ]}
                        label="Full Name"
                        name="full_name"
                    >
                        <Input placeholder="Enter your full name.." />
                    </Form.Item>
                    <Form.Item
                        rules={[
                            {
                                required: true,
                                type: 'email',
                                message: 'Please enter a valid email',
                            },
                        ]}
                        label="Email"
                        name="your_name"
                    >
                        <Input placeholder="Enter your email.." />
                    </Form.Item>
                    <Form.Item
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your address',
                            },
                        ]}
                        label="Address"
                        name="your_address"
                    >
                        <Input placeholder="Enter your full address.." />
                    </Form.Item>
                    <Form.Item>
                        <Checkbox defaultChecked disabled>
                            Cash on Delivery
                        </Checkbox>
                    </Form.Item>
                    <Typography.Paragraph type="secondary">
                        More methods coming soon
                    </Typography.Paragraph>
                    <Button type="primary" htmlType="submit">
                        {' '}
                        Confirm Order
                    </Button>
                </Form>
            </Drawer>
        </div>
    );
}
export default AppHeader;
