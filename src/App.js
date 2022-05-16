import "./App.css";
import { EntryPage } from "./pages/entry/EntryPage";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./pages/entry/dashboard/DashboardPage";
function App() {
  return (
    <div>
      {/* <EntryPage /> */}
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </div>
  );
}

export default App;
