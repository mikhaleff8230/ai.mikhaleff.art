import { useEffect, useState } from "react";
import DashboardSidebar from "../work/DashboardSidebar";
import DashboardTopbar from "../work/DashboardTopbar";
import DashboardContent from "../work/DashboardContent";

export default function WorkPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [language, setLanguage] = useState("ru");

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileSidebarOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <main className="page-noise h-screen overflow-hidden bg-[#0b0b0b] text-white">
      <div className="grid h-full lg:grid-cols-[auto_1fr]">
        <DashboardSidebar
          lang={language}
          collapsed={collapsed}
          openMobile={mobileSidebarOpen}
          onCloseMobile={() => setMobileSidebarOpen(false)}
          onToggleCollapsed={() => setCollapsed((prev) => !prev)}
        />

        <div className="min-w-0 overflow-hidden">
          <DashboardTopbar
            lang={language}
            onChangeLanguage={setLanguage}
            onOpenMobileSidebar={() => setMobileSidebarOpen(true)}
          />

          <div className="h-[calc(100vh-64px)] overflow-y-auto p-4 md:p-5">
            <section id="overview">
              <DashboardContent lang={language} />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
