import React, { useCallback } from 'react';
import { IItem } from '../../items';

interface Props {
  item: IItem;
  index: number;
  handleSelect: (item: IItem) => void;
}

const TextDropdownItem = ({ item, index, handleSelect }: Props) => {
  const _handleSelect = useCallback(
    () => {
      handleSelect(item);
    },
    [handleSelect, item],
  );

  return (
    <button
      key={item.id}
      className="text-dropdown__item"
      tabIndex={index + 2}
      onClick={_handleSelect}
    >
      <span
        className="text-dropdown__item-icon"
        style={{
          backgroundImage: `url(svg/${item.icon}.svg)`,
        }}
      ></span>
      {item.text}
    </button>
  );
};

export default TextDropdownItem;
