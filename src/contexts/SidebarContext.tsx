import React, { createContext, useState, useContext, useCallback } from 'react';

type SidebarContextType = {
   isOpen: boolean;
   onOpen: () => void;
   onClose: () => void;
   onToggle: () => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);
type SidebarContextProviderProps = {
   children: React.ReactNode;
};

export const SidebarContextProvider: React.FC<SidebarContextProviderProps> = ({ children }) => {
   const [isOpen, setIsOpen] = useState(false);

   const onOpen = useCallback(() => {
      setIsOpen(true);
   }, []);
   const onClose = useCallback(() => {
      setIsOpen(false);
   }, []);

   const onToggle = () => {
      setIsOpen(prev => !prev);
   };

   return (
      <SidebarContext.Provider value={{ isOpen, onOpen, onClose, onToggle }}>
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
