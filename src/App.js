import logo from './logo.svg';
import './App.css';
import Table_name from './component/tables/table';
import Image_profile from './component/images/image';
import Button_create from './component/button/button';
// importing the named component by using the inside of curly bracks..
import MainHeading,{Heading2 as SecondaryHeading} from './component/headings/headings';
import Unorderlist from './component/List/unorderlist';
import Orderlist from './component/List/orderlist';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
       <h1>
        hello user1
       </h1> clear
      </header> */}
      <Table_name/>
      <Image_profile/>
      <Orderlist></Orderlist>
      <Unorderlist></Unorderlist>
     
     

      
    </div>
  );
}

export default App;
