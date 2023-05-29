import { useCallback, useState } from 'react';

const useDisclosure = (defaultValue?: boolean) => {
   const [isOpen, setIsOpen] = useState(defaultValue || false);
   console.log(isOpen);
   const onOpen = useCallback(() => {
      setIsOpen(true);
   }, []);
   const onClose = useCallback(() => {
      setIsOpen(false);
   }, []);
   const onToggle = useCallback(() => {
      setIsOpen(prevValue => !prevValue);
   }, []);

   return {
      isOpen,
      onOpen,
      onClose,
      onToggle,
   };
};

export default useDisclosure;
