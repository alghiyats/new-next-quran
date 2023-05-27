import React, { createContext, useState, useContext } from 'react';

type SidebarContextType = {
   isOpen: boolean;
   toggleSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);
type SidebarProviderProps = {
   children: React.ReactNode;
};

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleSidebar = () => {
      setIsOpen(!isOpen);
   };

   return (
      <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
         {children}
      </SidebarContext.Provider>
   );
};
export const useSidebar = (): SidebarContextType => {
   const context = useContext(SidebarContext);
   if (!context) {
      throw new Error('useSidebar must be used within a SidebarProvider');
   }
   return context;
};
