import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

export const Single = () => {
  return (
      // df width:100%
    <div className="single">
      <Sidebar />
          {/* flex: 6  */}
      <div className="singleContainer">
        <Navbar />
          {/* df */}
          <div className="top">
              {/* flex: 1 pos: relative */}
            <div className="left">
                          {/* pos: absolute */}
                <div className="editButton">Edit</div>
                <h1 className="title">Information</h1>
                    {/* df  */}
                <div className="item">
                  <img 
                    src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" 
                    alt="" 
                    className="itemImg" 
                  />
                  <div className="details">
                  <h1 className="itemTitle">Jane Doe</h1>
                      <div className="detailItem">
                          <span className="itemKey">Email:</span>
                          <span className="itemValue">janedoe@gmail.com</span>
                      </div>
                      <div className="detailItem">
                          <span className="itemKey">Phone:</span>
                          <span className="itemValue">+1 2345 67 89</span>
                      </div>
                      <div className="detailItem">
                          <span className="itemKey">Address:</span>
                          <span className="itemValue">
                          Elton St. 234 Garden Yd. NewYork
                        </span>
                      </div>
                      <div className="detailItem">
                          <span className="itemKey">Country:</span>
                          <span className="itemValue">USA</span>
                      </div>
                  </div>
              </div>
            </div>
                {/* flex:2 */}
            <div className="right">
              <Chart aspect={3/1} title="User spending ( Last 6 Months)"/>
            </div>
          </div>
          <div className="bottom">
            <h1 className="title">Last Transactions</h1>
            <List />
          </div>
      </div>
    </div>
  )
}
