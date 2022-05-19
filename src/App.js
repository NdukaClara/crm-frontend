import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { EntryPage } from "./pages/entry/EntryPage";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./pages/entry/dashboard/DashboardPage";
import { AddTicketPage } from "./pages/new-ticket/AddTicketPage";
import { TicketlistPage } from "./pages/ticket-list/TicketlistPage";
import { Ticket } from "./pages/ticket/TicketPage";
import { PrivateRoute } from "./components/private-route/PrivateRouteComp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<EntryPage />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/add-ticket"
              element={
                <PrivateRoute>
                  <AddTicketPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/tickets"
              element={
                <PrivateRoute>
                  <TicketlistPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/ticket/:tId"
              element={
                <PrivateRoute>
                  <Ticket />
                </PrivateRoute>
              }
            />
          </Routes>
        </DefaultLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
