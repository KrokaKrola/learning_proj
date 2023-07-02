import { type ChangeEvent, memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { type DefaultTFuncReturn } from 'i18next';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string | DefaultTFuncReturn;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

export const Select = memo(
  ({ className, label, options, value, onChange, readOnly }: SelectProps) => {
    const optionsList = useMemo(
      () =>
        options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.content}
          </option>
        )),
      [options]
    );

    const onChangeHandler = useCallback(
      (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
      },
      [onChange]
    );

    return (
      <div
        className={classNames(cls.Select, { [cls.readOnly]: readOnly }, [
          className,
        ])}
      >
        {label && <span className={cls.label}>{`${label}>`}</span>}
        <select
          className={cls.select}
          value={value}
          onChange={onChangeHandler}
          disabled={readOnly}
        >
          {optionsList}
        </select>
      </div>
    );
  }
);
