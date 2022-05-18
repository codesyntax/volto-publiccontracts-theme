import StatesTableWidget from './Components/Widgets/StatesTableWidget';
import DatesTableWidget from './Components/Widgets/DatesTableWidget';
const applyConfig = (config) => {
  config.widgets.id = {
    ...config.widgets.id,
    states: StatesTableWidget,
    dates: DatesTableWidget,
  };
  return config;
};

export default applyConfig;
