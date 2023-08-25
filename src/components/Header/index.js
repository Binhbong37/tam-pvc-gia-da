import { MenuOutlined } from '@ant-design/icons';
import { Badge, Drawer, Menu, Typography } from 'antd';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

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
                                label: 'Lam 3 sóng',
                                key: 'lam-3-song',
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
            <Typography.Title>KangBang</Typography.Title>
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
            </Drawer>
        </div>
    );
}
export default AppHeader;
