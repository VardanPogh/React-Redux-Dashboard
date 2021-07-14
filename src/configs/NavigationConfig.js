import {
    DashboardOutlined,
    LogoutOutlined,
    UserOutlined,
    AppstoreOutlined
} from '@ant-design/icons';
import {APP_PREFIX_PATH} from 'configs/AppConfig'

const dashBoardNavTree = [{
    key: 'home',
    path: `${APP_PREFIX_PATH}`,
    title: 'home',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: []
}, {
    key: 'profile',
    path: `${APP_PREFIX_PATH}profile`,
    title: 'Profile',
    icon: UserOutlined,
    breadcrumb: false,
    submenu: []
}, {
    key: 'platforms',
    path: `${APP_PREFIX_PATH}platforms`,
    title: 'Platforms',
    icon: AppstoreOutlined,
    breadcrumb: false,
    submenu: []
}, {
    key: 'logout',
    path: `${APP_PREFIX_PATH}`,
    title: 'Logout',
    icon: LogoutOutlined,
    breadcrumb: false,
    submenu: []
}
]

const navigationConfig = [
    ...dashBoardNavTree
]

export default navigationConfig;
