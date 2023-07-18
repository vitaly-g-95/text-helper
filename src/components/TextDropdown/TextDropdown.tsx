import React, { SyntheticEvent, useCallback, useRef, useState } from 'react';
import './TextDropdown.scss';
import { IItem } from '../../items';
import Tip from '../Tip';
import TextDropdownItem from './TextDropdownItem';

interface Props {
  items: IItem[];
  handleTextChange: (value: string) => void;
}

const TextDropdown = ({ items, handleTextChange }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showTip, setShowTip] = useState(false);

  const handleValueChange = useCallback(
    (value: string) => {
      setShowTip(!!value.trim());
      handleTextChange(value);
    },
    [handleTextChange],
  );

  const _handleTextChange = useCallback(
    (event: SyntheticEvent) => {
      const { value } = event.target as HTMLInputElement;

      handleValueChange(value);
    },
    [handleValueChange],
  );

  const handleItemSelect = useCallback(
    (item: IItem) => {
      if (inputRef.current) {
        const value = ` ${item.text}`;

        inputRef.current.value = value;
        inputRef.current.focus();

        handleValueChange(inputRef.current.value);
      }
    },
    [handleValueChange],
  );

  return (
    <div className="text-dropdown">
      <div className="text-dropdown__input-container">
        <img
          className="text-dropdown__logo"
          src="svg/logo_compose_svg.svg"
          alt="logo"
        />
        <label
          htmlFor="text-dropdown-input"
          className="text-dropdown__prefix"
        >Write a</label>
        <input
          ref={inputRef}
          id="text-dropdown-input"
          className="text-dropdown__input"
          tabIndex={1}
          autoFocus
          onKeyUp={_handleTextChange}
        />
      </div>
      <div className="text-dropdown__hint">Type anything or...</div>
      <div className="text-dropdown__items">
        {items.map((item, index) => (
          <TextDropdownItem
            key={item.id}
            item={item}
            index={index}
            handleSelect={handleItemSelect}
          />
        ))}
      </div>
      {showTip && (
        <div className="text-dropdown__tip">
          <Tip />
        </div>
      )}
    </div>
  );
};

export default TextDropdown;
