import React from 'react';
import Main from '@/components/Main';
import Login from '@/components/Login';
import Dashboard from '@/components/Dashboard';
export const metadata = {
  title: "Broodl · Dashboard",
};

const DashboardPage = () => {
  const isAuthenticated = true; // Set to false, so Login should render

  return (
    <Main>
      {!isAuthenticated ? <Login /> : <Dashboard />} {/* Conditionally render Login */}
    </Main>
  );
}

export default DashboardPage;