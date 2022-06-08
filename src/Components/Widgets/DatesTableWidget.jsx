import React from 'react';
import { ReactTableWidget } from '@eeacms/volto-react-table-widget';

const ItemSchema = () => ({
  title: 'Dates',
  properties: {
    title: {
      title: 'Title',
      description: 'Enter the title of this date.',
      type: 'string',
    },
    date: {
      title: 'Date',
      description: 'Enter the date',
      type: 'date',
    },
  },
  fieldsets: [
    {
      id: 'default',
      title: 'Dates',
      fields: ['title', 'date'],
    },
  ],
  required: [],
});

const DatesTableWidget = (props) => {
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

export default DatesTableWidget;
