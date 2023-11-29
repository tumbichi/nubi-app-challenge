import React, {PropsWithChildren, useCallback, useState} from 'react';
import CardDataVisualizationContext from './CardDataVisualizationContext';

export default function CardDataVisualizationProvider({
  children,
}: PropsWithChildren) {
  const [show, setShow] = useState(false);

  const onChange = useCallback((value: boolean) => {
    setShow(value);
  }, []);

  return (
    <CardDataVisualizationContext.Provider value={{show, onChange}}>
      {children}
    </CardDataVisualizationContext.Provider>
  );
}
