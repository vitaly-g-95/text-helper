import React, { useState } from 'react';
import items, { IItem } from '../../items';
import TextDropdown from '../../components/TextDropdown';

const TextHelper = () => {
  const [filteredItems, setFilteredItems] = useState<IItem[]>(items);

  const filterItems = (value: string) => {
    const [article, ...words] = value.split(/\s+/);

    if (!['', 'n'].includes(article)) {
      setFilteredItems([]);
      return;
    }

    const newFilteredItems = items.filter(item => {
      return words.every(word => item.text.includes(word));
    });

    setFilteredItems(newFilteredItems);
  };

  return (
    <TextDropdown
      items={filteredItems}
      handleTextChange={filterItems}
    />
  );
};

export default TextHelper;
