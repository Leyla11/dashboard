import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './single.scss'

const Single = () => {
  return (
    <div className='single'>
    <Sidebar/>
    <div className="singleContainer">
      <Navbar/>
      <div className="top">
        <div className="left">
        <div className="editButton">Edit</div>
          <h1 className="title">Information</h1>
          <div className="item">
            <img 
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" 
              alt="" 
              className="itemImg" />
            <div className="details">
              <h1 className="itemTitle">Jane Doe</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <div className="itemValue">janedoe@gmail.com</div>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <div className="itemValue">+1 2313 12 14</div>
              </div>
              <div className="detailItem">
                <span className="itemKey">Adress:</span>
                <div className="itemValue">Elton St. 234 Garden Yd. NewYork</div>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <div className="itemValue">USA</div>
              </div>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
      <div className="bottom"></div>
    </div>
    </div>
  )
}

export default Single