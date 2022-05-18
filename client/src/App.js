import React, {useEffect} from 'react'
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Auth from './componets/Auth';
import Collections from './componets/Collections';
import Header from './componets/Header';
import Home from './componets/Home';
import CreateCollection from './componets/menuCollections/CreateCollection';
import TopCollections from './componets/TopCollections';
import UserCollections from './componets/UserCollections';
import { login } from "./features/auth/authSlice";


export default function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(login());
    }
  }, [dispatch]);


  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/topCollections" element={<TopCollections />} />
            <Route path="/lastCollections" element={<Collections />} />
          </Route>
            <Route path="/auth" element={<Auth />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/userCollections" element={<UserCollections />} />
              <Route
                path="/userCollections/:id"
                element={<UserCollections />}
              />
              <Route
                path="/collections/create"
                element={<CreateCollection />}
              />
        </Routes>
      </main>
    </>
  );
}

