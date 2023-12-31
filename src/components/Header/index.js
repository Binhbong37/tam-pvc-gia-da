import { MenuOutlined } from '@ant-design/icons';
import { Badge, Drawer, Menu, Typography } from 'antd';
import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

function AppHeader() {
    const navigate = useNavigate();
    const location = useLocation();

    const onMenuClick = (item) => {
        navigate(`/${item.key}`);
    };
    return (
        <div className="appHeader">
            <Menu
                className="appMenu"
                onClick={onMenuClick}
                mode="horizontal"
                defaultSelectedKeys={[location.pathname.substring(1)]}
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
                        key: 'lam-song',
                        children: [
                            {
                                label: 'Lam 3 sóng thấp',
                                key: 'lam-3-song',
                            },
                            {
                                label: 'Lam 4 sóng cao',
                                key: 'lam-4-song-cao',
                            },
                            {
                                label: 'Lam 4 sóng thấp',
                                key: 'lam-4-song-thap',
                            },
                            {
                                label: 'Lam 5 sóng thấp',
                                key: 'lam-5-song',
                            },
                        ],
                    },
                    {
                        label: 'Tấm nano',
                        key: 'nano',
                    },
                    {
                        label: 'Phụ kiện',
                        key: 'phu-kien',
                        children: [
                            { label: 'Keo & nẹp nhôm', key: 'phu-kien-pvc' },
                            { label: 'Các loại phào', key: 'phao-chi' },
                        ],
                    },
                ]}
            />
            <Typography.Title>
                <Link to={'/register'}>KangBang</Link>
            </Typography.Title>
            <AppCart />
        </div>
    );
}

function AppCart() {
    const navigate = useNavigate();

    const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

    const onMenuClick = (item) => {
        setCartDrawerOpen(false);
        navigate(`/${item.key}`);
    };

    return (
        <div className="iconMenu">
            <Badge
                onClick={() => {
                    setCartDrawerOpen(true);
                }}
                className="soppingCartIcon"
            >
                <MenuOutlined className="iconMenu" />
            </Badge>
            <Drawer
                open={cartDrawerOpen}
                onClose={() => {
                    setCartDrawerOpen(false);
                }}
                title="Menu"
                contentWrapperStyle={{ width: 500 }}
            >
                <Menu
                    className=""
                    mode="vertical"
                    onClick={onMenuClick}
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
                            key: 'lam-song',
                            children: [
                                {
                                    label: 'Lam 3 sóng',
                                    key: 'lam-3-song',
                                },
                                {
                                    label: 'Lam 4 sóng cao',
                                    key: 'lam-4-song-cao',
                                },
                                {
                                    label: 'Lam 4 sóng thấp',
                                    key: 'lam-4-song-thap',
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
                            label: 'Phụ kiện',
                            key: 'phu-kien',
                            children: [
                                {
                                    label: 'Keo & nẹp nhôm',
                                    key: 'phu-kien-pvc',
                                },
                                { label: 'Các loại phào', key: 'phao-chi' },
                            ],
                        },
                    ]}
                />
            </Drawer>
        </div>
    );
}
export default AppHeader;
