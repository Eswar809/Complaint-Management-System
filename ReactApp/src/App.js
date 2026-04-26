import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FooterComponent from './Components/FooterComponent';
import ListUserComponent from './Components/ListUserComponent';
import AddUserComponent from './Components/AddUserComponent';
import AppLayout from '.';
import UserDeletedComponent from './Components/UserDeletedComponent';
import CreateWorkComponent from './Components/CreateWorkComponent';
import ListWorkComponent from './Components/ListWorkComponent';
import UpdateWorkComponent from './Components/UpdateWorkComponent';
import DetailsComponent from './Components/DetailsComponent';
import DocumentsComponent from './Components/DocumentsComponent';
import SearchWorkByIdNameComponent from './Components/SearchWorkByIdNameComponent';
import CreateWorkMasterComponent from './Components/CreateWorkMasterComponent';
import IntermediateUserDetailsComponent from './Components/IntermediateUserDetailsComponent';
import UserDetailsComponent from './Components/UserDetailsComponent';
import UserDocumentsComponent from './Components/UserDocumentsComponent';
import SearchUserComponent from './Components/SearchUserComponent';
import IntermediateWorkDetailsComponent from './Components/IntermediateWorkDetailsComponent';
import SearchCreateWorkMasterComponent from './Components/SearchCreateWorkMasterComponent';

function App() {
  return (
    <div>
      <Router>
      {/* <HeaderComponent/> */}
      <div className="containter">
        <Routes>
          <Route element = {<AppLayout/>}>
            <Route exact path = "/" element = {<ListUserComponent/>}/>
            <Route exact path = "/users" element = {<ListUserComponent/>}/>
            <Route exact path = "/add-user" element = {<AddUserComponent/>} />
            <Route exact path = "/edit-user/:id" element = {<AddUserComponent/>} />
            <Route exact path = "/search-user/:name" element = {<SearchUserComponent/>} />
            <Route exact path = "/more-details/:id" element = {<IntermediateUserDetailsComponent/>} />
            <Route exact path = "/user-details/:id" element = {<UserDetailsComponent/>} />
            <Route exact path = "/user-documents/:id" element = {<UserDocumentsComponent/>} />
            <Route exact path = "/user-deleted/:id" element = {<UserDeletedComponent/>} />
            <Route exact path = "/work" element = {<ListWorkComponent/>} />
            <Route exact path = "/create-work" element = {<CreateWorkMasterComponent/>} />
            <Route exact path = "/search/create-work/:name" element = {<SearchCreateWorkMasterComponent/>} />
            <Route exact path = "/create-work/:id" element = {<CreateWorkComponent/>} />
            <Route exact path = "/edit-work/:id" element = {<UpdateWorkComponent/>} />
            <Route exact path = "/search-work/idName/:idName" element = {<SearchWorkByIdNameComponent/>} />
            <Route exact path = "/more-work-details/:id" element = {<IntermediateWorkDetailsComponent/>} />
            <Route exact path = "/details/:id" element = {<DetailsComponent/>} />
            <Route exact path = "/documents/:id" element = {<DocumentsComponent/>} />
            

          </Route>
        </Routes>
      </div> 
      </Router>
      <FooterComponent/>
    </div>
  );
}

export default App;
