import { useRecoilState } from 'recoil';

import ThemeAtom from '@State/Theme';

import MainLayout from '@Layouts/MainLayout';

const Error = (): JSX.Element => {
  const [theme, setTheme] = useRecoilState(ThemeAtom);

  return (
    <MainLayout>
      <div>404</div>
    </MainLayout>
  );
};

export default Error;
