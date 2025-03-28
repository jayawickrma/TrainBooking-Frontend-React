import { SidebarComponent } from "./SidebarComponent.tsx";
import { Outlet } from "react-router-dom";

export function AdminLayout() {
    return (
        <div className="admin-container">
            <SidebarComponent />
            <main className="admin-main">
                <Outlet />
            </main>
        </div>
    );
}