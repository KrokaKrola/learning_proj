import { type FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed] = useState(false);

  // const onToggle = () => {
  //   setCollapsed(!collapsed);
  // };

  return (
    <aside
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
      data-testid="Sidebar"
    >
      {/* <Button */}
      {/*  theme={ThemeButton.CLEAR} */}
      {/*  data-testid="Sidebar-toggle" */}
      {/*  onClick={onToggle} */}
      {/* > */}
      {/*  toggle */}
      {/* </Button> */}
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </aside>
  );
};
