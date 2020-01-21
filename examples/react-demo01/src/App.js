import  React  from  "react";
import "./index.css"
// import { DatePicker } from 'antd';
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

    class App extends React.Component {
          constructor(props) {
                super(props);
                this.state = {  };
          }
          render() {
                return (
                  <div>
                        <h2 className='title' style={{ color: "red" }}>react-demo-01</h2>
                        <button className="clickBtn">More Details</button>
                  </div>  
                );
          }
    }
    
    export default App;
