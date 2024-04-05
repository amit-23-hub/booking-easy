import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout/Layout";
import Register from "./Pages/Register";
import SignIn from "./Pages/SignIn";
import AddBanket from "./Pages/Banket";
import { useAppContext } from "./contexts/AppContext";
import MyBankets from "./Pages/MyBankets";
import UpdateBanquet from "./Pages/UpdateBanquet";
import Home from './Pages/Home'

function App() {

  const {isLoggedIn} = useAppContext();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout>
          <Home/>
        </Layout>} />
        <Route path="/search" element={<Layout>
          <p>Search Page</p>
        </Layout>} />

        <Route path="/register" element={<Layout><Register/></Layout>} />
        <Route path="/sign-in" element={<Layout><SignIn/></Layout>}/>

        {isLoggedIn && (
          <>
          <Route 
          path="/add-banquet"
          element={
            <Layout>
              <AddBanket/>
            </Layout>
          }/>
          <Route 
          path="/my-banquet"
          element={
            <Layout>
              <MyBankets/>
            </Layout>
          }/>
          <Route 
          path="update-banquet/:banquetId"
          element={
            <Layout>
              <UpdateBanquet/>
            </Layout>
          }/>

          </>
        )}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
