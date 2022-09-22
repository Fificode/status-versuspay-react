import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';
import AddIncident from 'pages/AddIncident';
import AddRecipient from 'pages/AddRecipient';
import ManageIncident from 'pages/ManageIncident';
import Settings from 'pages/Settings';
import Tables from 'pages/Tables';
import Footer from 'components/Footer';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import ManageRecipient from 'pages/ManageRecipient';

function App() {
    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/addincident" component={AddIncident} />
                    <Route exact path="/addrecipient" component={AddRecipient} />
                    <Route exact path="/manageincident" component={ManageIncident} />
                    <Route exact path="/managerecipient" component={ManageRecipient} />
                    <Route exact path="/settings" component={Settings} />
                    <Route exact path="/incidentlist" component={Tables} />
                    <Route exact path="/recipientlist" component={Tables} />
                    <Redirect from="*" to="/" />
                </Switch>
                <Footer />
            </div>
        </>
    );
}

export default App;
