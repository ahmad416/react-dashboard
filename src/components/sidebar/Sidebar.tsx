import './Sidebar.scss';
import { Link } from 'react-router-dom';
import {
    Dashboard,
    PersonOutline,
    Store,
    CreditCard,
    LocalShipping,
    InsertChart,
    NotificationsNone,
    SettingsSystemDaydreamOutlined,
    PsychologyOutlined,
    SettingsApplications,
    AccountCircleOutlined,
    ExitToAppRounded
} from "@mui/icons-material";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <Link to='/' style={{ textDecoration: 'none'}}>
                    <span className="logo">DASHBOARD</span>
                </Link>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <p className='title'>MAIN</p>
                    <li>
                       <Dashboard className='icon'/>
                        <span>Dashboard</span>
                    </li>
                    <p className='title'>LISTS</p>
                    <Link to='/' style={{ textDecoration: 'none'}}>
                        <li>
                            <PersonOutline className='icon'/>
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to='/' style={{ textDecoration: 'none'}}>
                        <li>
                            <Store className='icon'/>
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <CreditCard className='icon'/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShipping className='icon'/>
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <InsertChart className='icon'/>
                        <span>Stat</span>
                    </li>
                    <li>
                        <NotificationsNone className='icon'/>
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlined className='icon'/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlined className='icon'/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplications className='icon'/>
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlined className='icon'/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppRounded className='icon'/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar;
