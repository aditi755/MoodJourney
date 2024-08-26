import React from 'react';
import Main from '@/components/Main';
import Login from '@/components/Login';
import Dashboard from '@/components/Dashboard';
import { useAuth } from '@/context/AuthContext';
import Loading from '@/components/Loading';
export const metadata = {
  title: "MoodJourney · Dashboard",
};

const DashboardPage = () => {


  return (
    <Main>
      {/* {!isAuthenticated ? <Login /> : <Dashboard />}  */}
      {/* Conditionally render Login */}
      <Dashboard />
    </Main>
  );
}

export default DashboardPage;