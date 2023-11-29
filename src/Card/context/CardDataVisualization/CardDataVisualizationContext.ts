import {createContext} from 'react';

interface CardDataVisualizationContext {
  show: boolean;
  onChange: (value: boolean) => void;
}

export default createContext<CardDataVisualizationContext>(undefined);
