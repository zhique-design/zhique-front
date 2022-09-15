import React, { useRef } from "react";
import { AutoComplete, AutoCompleteProps, Input } from "antd";
import useMergedState from "rc-util/lib/hooks/useMergedState";
import classNames from "classnames";

import styles from "./index.module.less";
import Icon from "../Icon";

export type HeaderSearchProps = {
  onSearch?: (value?: string) => void;
  onChange?: (value?: string) => void;
  onVisibleChange?: (b: boolean) => void;
  className?: string;
  placeholder?: string;
  options: AutoCompleteProps["options"];
  defaultOpen?: boolean;
  open?: boolean;
  defaultValue?: string;
  value?: string;
};

const HeaderSearch: React.FC<HeaderSearchProps> = ({
  className,
  defaultValue,
  defaultOpen,
  placeholder,
  open,
  onChange,
  onVisibleChange,
  options,
  onSearch,
  ...rest
}) => {
  const inputRef = useRef<any>(null);
  const [value, setValue] = useMergedState<string | undefined>(defaultValue, {
    value: rest.value,
    onChange,
  });
  const [searchMode, setSearchMode] = useMergedState<boolean>(!!defaultOpen, {
    value: open,
    onChange: onVisibleChange,
  });
  const inputClass = classNames(className, {
    [styles.show]: searchMode,
  });

  return (
    <div
      className={classNames(className, styles.headerSearch)}
      onClick={() => {
        setSearchMode(true);
        if (searchMode && inputRef.current) {
          inputRef.current.focus();
        }
      }}
      onTransitionEnd={({ propertyName }) => {
        if (propertyName === "width" && !searchMode) {
          if (onVisibleChange) {
            onVisibleChange(searchMode);
          }
        }
      }}
    >
      <Icon
        type="search"
        style={{ cursor: "pointer" }}
        className={styles.search}
      />
      <AutoComplete
        key="AutoComplete"
        className={inputClass}
        value={value}
        style={{ height: 28, marginTop: -6 }}
        options={options}
        onChange={setValue as any}
      >
        <Input
          ref={inputRef}
          defaultValue={defaultValue}
          aria-label={placeholder}
          placeholder={placeholder}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (onSearch) {
                onSearch(value);
              }
            }
          }}
          onBlur={() => {
            setSearchMode(false);
          }}
        />
      </AutoComplete>
    </div>
  );
};

export default HeaderSearch;
