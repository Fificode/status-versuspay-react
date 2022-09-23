import { Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';
import AddIncident from 'pages/AddIncident';
import AddRecipient from 'pages/AddRecipient';
import ManageIncident from 'pages/ManageIncident';
import Settings from 'pages/Settings';
import IncidentList from 'pages/IncidentList';
import Footer from 'components/Footer';
import RecipientList from 'pages/RecipientList'
import ManageRecipient from 'pages/ManageRecipient';
import Login from 'pages/Login';
import Report from 'pages/Report';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';


function App() {
    return (
        <>
            <Routes>
<Route path='/' exact element={<Login />} />
      <Route path='/report' element={<Report/>} />
               <Route path='/dashboard' element={<LayoutsWithSidebar/>}>
                    <Route  path="/dashboard" element={<Dashboard/>} />
                    <Route exact path="/dashboard/addincident" element={<AddIncident/>} />
                    <Route exact path="/dashboard/addrecipient" element={<AddRecipient/>} />
                    <Route exact path="/dashboard/manageincident" element={<ManageIncident/>} />
                    <Route exact path="/dashboard/managerecipient" element={<ManageRecipient/>} />
                    <Route exact path="/dashboard/settings" element={<Settings/>} />
                    <Route exact path="/dashboard/incidentlist" element={<IncidentList/>} />
                    <Route exact path="/dashboard/recipientlist" element={<RecipientList/>} />
                   </Route>
                </Routes>
               </>
    );
}

function LayoutsWithSidebar(){
    return (
      <>
<Sidebar  />
<Outlet />
 <Footer />
      </>
    )
  }
export default App;
