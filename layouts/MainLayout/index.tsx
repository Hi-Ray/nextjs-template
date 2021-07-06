import { ThemeProvider } from 'styled-components';
import { useRecoilState } from 'recoil';

import Header from '@Components/Header';
import ThemeAtom from '@State/Theme';

import MainLayoutProps from '@Interfaces/layouts/MainLayout/Props';
import Styled from './assets/styled';

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  const [theme, setTheme] = useRecoilState(ThemeAtom);

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <Styled>
        <Header />
        {children}
      </Styled>
    </ThemeProvider>
  );
};

export default MainLayout;
