import { useRecoilState } from 'recoil';

import ThemeAtom from '@State/Theme';

import MainLayout from '@Layouts/MainLayout';

const Home = (): JSX.Element => {
  const [theme, setTheme] = useRecoilState(ThemeAtom);

  return (
    <MainLayout>
      <div>Content</div>
    </MainLayout>
  );
};

export default Home;
