import {
  type ChangeEvent,
  type FC,
  type InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
} from 'react';
import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { type DefaultTFuncReturn } from 'i18next';

type HtmlInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly' | 'placeholder'
>;

interface InputProps extends HtmlInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readOnly?: boolean;
  placeholder?: string | DefaultTFuncReturn;
}

export const Input: FC<InputProps> = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readOnly,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus) {
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const mods: Mods = {
    [cls.readOnly]: readOnly,
  };

  return (
    <div className={classNames(cls.Input, mods, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>{`${placeholder}>`}</div>
      )}
      <div className={cls.inputWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.inputElement}
          readOnly={readOnly}
          {...otherProps}
        />
      </div>
    </div>
  );
});

Input.displayName = 'Input';
