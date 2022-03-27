import { useState } from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./new.scss"

export const New = ({ inputs, title }) => {

  const [file, setFile] = useState("");

  return (
      //df
    <div className="new">
      <Sidebar />

        {/* flex: 6 */}
      <div className="newContainer">
        <Navbar />

          {/* df */}
        <div className="top">
          <h1>{ title }</h1>
        </div>

          {/* df */}
        <div className="bottom">
              {/* flex:1 */}
          <div className="left">
            <img
              src={ file 
                       ? URL.createObjectURL(file)
                       : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              } 
              alt="" />
          </div>
              {/* flex:2 */}
          <div className="right">
              {/* df flex-wrap: wrap */}
            <form>
              <div className="formInput">
                  <label htmlFor="file">
                    Image: <DriveFolderUploadOutlinedIcon className="icon"/>
                  </label>
                  <input 
                    type="file" 
                    id="file" 
                    style={{display: 'none'}}
                    onChange={(e) => setFile(e.target.files[0])} />
              </div>

              { inputs.map((input) => (
                <div className="formInput" key={ input.id }>
                    <label>{ input.label }</label>
                    <input
                      type={ input.label }
                      placeholder={ input.placeholder }
                    />
                </div>
              ))}

              
              <button>Send</button>

            </form>
          </div>
        </div>


      </div>
    </div>
  )
}
