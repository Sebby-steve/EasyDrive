import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";

import { Footer, Navbar } from "./components";
import {
  About,
  AuthPage,
  Companies,
  CompanyProfile,
  FindJobs,
  JobDetail,
  UploadJob,
  UserProfile,
} from "./pages";
import { useSelector } from "react-redux";
import DriverDashboard from "./pages/Driver-Dashboard";
import Hero from "./components/Hero"; // Import the Hero component

function Layout() {
  const auth = useSelector((store) => store.user);
  return auth ? <Outlet /> : <Navigate to="/user-auth" />;
}

function App() {
  const { auth: user } = useSelector((state) => state.user);
    const location = useLocation(); // Hook to get the current location
    const shouldShowHero = (pathname) => { return pathname === "/find-jobs"; };

  return (
      <main className="bg-[#f7fdfd]">
        <Navbar/>
          {/* Use function to conditionally render Hero component */}
          {shouldShowHero(location.pathname) && <Hero />}

        <Routes>
          <Route element={<Layout/>}>
            <Route
                path="/"
                element={<Navigate to="/find-jobs" replace={false}/>}
            />
            <Route path="/find-jobs" element={<FindJobs/>}/>
            <Route path="/companies" element={<Companies/>}/>
            <Route
                path={
                  user?.user?.accountType === "seeker"
                      ? "/user-profile"
                      : "/user-profile/:id"
                }
                element={<UserProfile/>}
            />

            <Route path={"/company-profile"} element={<CompanyProfile/>}/>
            <Route path={"/company-profile/:id"} element={<CompanyProfile/>}/>
            <Route path={"/upload-job"} element={<UploadJob/>}/>
            <Route path={"/job-detail/:id"} element={<JobDetail/>}/>
          </Route>

          <Route path="/driver-dashboard" element={<DriverDashboard/>}/>
          <Route path="/about-us" element={<About/>}/>
          <Route path="/user-auth" element={<AuthPage/>}/>
        </Routes>

        <Footer/>
      </main>

  );
}

export default App;
