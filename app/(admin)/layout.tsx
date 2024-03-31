import SideBarComponent from "@/components/sidebar/SideBarComponent";
import { MenuIcon } from "@/components/icon/FontAwesome";
import "@/app/globals.css";
import { useEffect, useRef } from 'react';



export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="flex ">
        <MenuIcon/>
        <aside className="h-screen hidden lg:block">
          <SideBarComponent />
        </aside>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
