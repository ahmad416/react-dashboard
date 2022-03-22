import Sidebar from "../../components/sidebar/Sidebar";
import './Home.scss'
import Navbar from "../../components/navbar/Navbar";
import Gidget from "../../components/widget/Gidget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Gidget type="user" />
                    <Gidget type="order" />
                    <Gidget type="earning" />
                    <Gidget type="balance" />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart title="Last 6 months {Revenue}" aspect={2/1}/>
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <List/>
                </div>
            </div>
        </div>
    )
}

export default Home;
