import "./App.css";
import { EntryPage } from "./pages/entry/EntryPage";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./pages/entry/dashboard/DashboardPage";
import { AddTicketPage } from "./pages/new-ticket/AddTicketPage";
import { TicketlistPage } from "./pages/ticket-list/TicketlistPage";
function App() {
  return (
    <div>
      {/* <EntryPage /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicketPage /> */}
        <TicketlistPage />
      </DefaultLayout>
    </div>
  );
}

export default App;
