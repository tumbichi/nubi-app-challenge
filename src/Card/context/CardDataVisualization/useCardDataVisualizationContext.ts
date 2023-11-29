import {useContext} from 'react';
import CardDataVisualizationContext from './CardDataVisualizationContext';

const useCardDataVisualizationContext = () => {
  const context = useContext(CardDataVisualizationContext);

  if (context === undefined) {
    throw new Error(
      'useCardDataVisualization must be used within a CardDataVisualizationProvider',
    );
  }

  return context;
};

export default useCardDataVisualizationContext;
