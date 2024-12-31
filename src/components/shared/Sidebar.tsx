"use client";
import { dashboardRoutes } from "@/constant";
import { montserrat } from "@/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoLockClosed } from "react-icons/io5";

const Sidebar = () => {
  const pathname = usePathname();

  const handleLogout = () => {
    // logout();
    // userLoading(true);
    // if (protectedRoutes.some((route) => pathname.match(route))) {
    //   router.push("/");
    // }
  };

  return (
    <>
      <section
        className="bg-[#212428] max-w-72 w-full h-[calc(100vh-5rem)] sticky top-[85px] left-0 p-4 lg:flex flex-col justify-between hidden overflow-hidden shadow-custom-shadow-1"
        style={{ minHeight: "calc(100vh - 5rem)" }}
      >
        {/* Sidebar Content */}
        <div className="overflow-y-auto flex-grow">
          {/* Routes */}
          <div className="py-4 flex flex-col gap-2">
            {dashboardRoutes?.map((route) => (
              <Link key={route.path} href={route.path}>
                <div
                  key={route.path}
                  className={`w-full p-4 duration-100 transition-all font-medium rounded-lg flex items-center gap-2 text-sm  ${
                    montserrat.className
                  } uppercase ${
                    pathname === route.path
                      ? "bg-black/30 text-primary shadow-custom-shadow-1"
                      : "hover:shadow-custom-shadow-1 hover:text-primary hover:bg-black/30 transition-all duration-300 text-secondary"
                  }`}
                >
                  {route.icon} {route.name}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Logout Section */}
        <div className="py-2 border-t border-gray-500">
          <div
            onClick={handleLogout}
            className={`w-full p-4 hover:cursor-pointer font-medium rounded-lg flex items-center gap-2 hover:bg-black/30 hover:shadow-custom-shadow-1 transition-all duration-300 text-secondary`}
          >
            <IoLockClosed size={20} />
            <p className="font-medium">Logout</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
