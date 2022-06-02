import StatesTableWidget from './Components/Widgets/StatesTableWidget';
import DatesTableWidget from './Components/Widgets/DatesTableWidget';
import ContractView from './Components/Views/ContractView';
const applyConfig = (config) => {
  config.widgets.id = {
    ...config.widgets.id,
    states: StatesTableWidget,
    dates: DatesTableWidget,
  };
  config.views = {
    ...config.views,
    contentTypesViews: {
      ...config.views.contentTypesViews,
      Contract: ContractView,
    },
  };
  return config;
};

export default applyConfig;
