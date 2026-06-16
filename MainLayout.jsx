import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

function MainLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <TopNavbar />

        {children}
      </div>
    </div>
  );
}

export default MainLayout;