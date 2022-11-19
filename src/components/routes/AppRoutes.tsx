import {
    Routes,
    Route,
} from "react-router";
import {BrowserRouter} from "react-router-dom";
import HomePage from "../HomePage";



const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}>
                    {/* <Route index element={<Home />} />
          <Route path="upload" element={<UploadFacet />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dashboard-page" element={<DashboardPage />} />
             <Route path="dashboard-page-action" element={<DashboardPageAction />} />
             <Route path="search" element={<Search />} />
            <Route index element={<LeagueStandings />} />
          </Route> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
};

export default AppRoutes