import React from 'react';
import { ReactTableWidget } from '@eeacms/volto-react-table-widget';

const ItemSchema = () => ({
  title: 'States',
  properties: {
    value: {
      title: 'Value',
      description: 'Enter the value of this state.',
      type: 'string',
    },
    title: {
      title: 'Title',
      description: 'Enter the title of this state.',
      type: 'string',
    },
  },
  fieldsets: [
    {
      id: 'default',
      title: 'States',
      fields: ['value', 'title'],
    },
  ],
  required: [],
});

const StatesTableWidget = (props) => {
  return (
    <ReactTableWidget
      schema={ItemSchema()}
      {...props}
      csvexport={false}
      csvimport={false}
      value={props.value?.items || props.default?.items || []}
      onChange={(id, value) => props.onChange(id, { items: value })}
    />
  );
};

export default StatesTableWidget;
