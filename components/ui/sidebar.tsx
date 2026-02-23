"use client";

import { cn } from "@/lib/utils";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

interface SidebarLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) throw new Error("useSidebar must be used within SidebarProvider");
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);
  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;
  return (
    <SidebarContext.Provider value={{ open, setOpen, animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => (
  <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
    {children}
  </SidebarProvider>
);

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => (
  <>
    <DesktopSidebar {...props} />
    <MobileSidebar {...(props as React.ComponentProps<"div">)} />
  </>
);

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <motion.div
      className={cn(
        "h-screen sticky top-0 px-3 py-5 hidden md:flex md:flex-col flex-shrink-0 border-r overflow-hidden",
        className
      )}
      style={{
        backgroundColor: "var(--color-sidebar-bg)",
        borderColor: "var(--color-sidebar-border)",
      }}
      animate={{ width: "240px" }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const { open, setOpen } = useSidebar();
  return (
    <>
      <div
        className="h-14 px-4 flex flex-row md:hidden items-center justify-between w-full border-b"
        style={{
          backgroundColor: "var(--color-sidebar-bg)",
          borderColor: "var(--color-sidebar-border)",
        }}
        {...props}
      >
        <div className="flex items-center gap-2">
          <div
            className="h-6 w-6 rounded-md flex-shrink-0"
            style={{ backgroundColor: "var(--color-primary)" }}
          />
          <span className="font-semibold text-sm" style={{ color: "var(--color-text-primary)" }}>
            성과보고서
          </span>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="p-1 rounded-md hover:bg-gray-100 transition-colors"
        >
          <Menu className="h-5 w-5" style={{ color: "var(--color-text-secondary)" }} />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className={cn(
                "fixed h-full w-72 inset-y-0 left-0 p-6 z-[100] flex flex-col shadow-xl",
                className
              )}
              style={{ backgroundColor: "var(--color-sidebar-bg)" }}
            >
              <button
                className="absolute right-4 top-4 p-1 rounded-md hover:bg-gray-100 transition-colors"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" style={{ color: "var(--color-text-secondary)" }} />
              </button>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export const SidebarNavLink = ({
  link,
  className,
  isActive,
  onClick,
}: {
  link: SidebarLink;
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
}) => {
  const { open, animate } = useSidebar();
  return (
    <a
      href={link.href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-2 py-2.5 rounded-lg transition-all duration-150 group relative",
        isActive
          ? "text-white"
          : "hover:bg-gray-100",
        className
      )}
      style={
        isActive
          ? { backgroundColor: "var(--color-primary)", color: "white" }
          : { color: "var(--color-text-secondary)" }
      }
    >
      <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
        {link.icon}
      </span>
      <span className="text-sm font-medium whitespace-nowrap overflow-hidden">
        {link.label}
      </span>
    </a>
  );
};
