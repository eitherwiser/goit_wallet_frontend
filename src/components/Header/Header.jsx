//import { useMediaQuery } from 'react-responsive';
import s from './Header.module.css';
import UserMenu from 'components/UserMenu/';
import LogoComponent from 'components/LogoComponent';

export default function Header() {
  //const isMobileorTablet = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <header className={s.header}>
      <LogoComponent />

      <UserMenu />
    </header>
  );
}
