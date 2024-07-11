import logo from './logo.svg';
import './App.css';
import Table_name from './component/tables/table';
import Image_profile from './component/images/image';
import Button_create from './component/button/button';
// importing the named component by using the inside of curly bracks..
import MainHeading,{Heading2 as SecondaryHeading} from './component/headings/headings';
import Unorderlist from './component/List/unorderlist';
import Orderlist from './component/List/orderlist';
import IplItem from './component/Iplmatch/Iplmatch';


function App() {
  return (
    <>
    
      <IplItem ></IplItem>
      </>
     );
}

export default App;
