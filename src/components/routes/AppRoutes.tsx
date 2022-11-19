
import HomePage from "../HomePage";
import UploadFacet from "../UploadFacet";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}>
                     <Route index element={<HomePage />} />
          <Route path="upload-facet" element={<UploadFacet />}>
              
            {/*<Route path="dashboard" element={<Dashboard />} />*/}
          {/*  <Route path="dashboard-page" element={<DashboardPage />} />*/}
          {/*   <Route path="dashboard-page-action" element={<DashboardPageAction />} />*/}
          {/*   <Route path="search" element={<Search />} />*/}
          {/*  <Route index element={<LeagueStandings />} />*/}
          </Route> 
                </Route>
            </Routes>
        </BrowserRouter>
    )
};

export default AppRoutes