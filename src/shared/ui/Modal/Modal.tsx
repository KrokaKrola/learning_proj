import {
  type FC,
  type ReactNode,
  type MouseEvent,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 250;

export const Modal: FC<ModalProps> = (props) => {
  const { className, children, isOpen, onClose, lazy } = props;
  const { theme } = useTheme();

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const timerRef = useRef(null);

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.closing]: isClosing,
  };

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const onKeyDown = useCallback(
    (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      clearTimeout(timerRef.current);
    };
  }, [isOpen, onKeyDown]);

  if (lazy && !isMounted) return null;

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className, theme])}>
        <div className={cls.overlay} onClick={handleClose}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
