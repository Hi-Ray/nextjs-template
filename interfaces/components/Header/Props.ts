import { NextRouter } from 'next/router';

export default interface Props {
  url?: string;
  title?: string;
  description?: string;
  image?: string;
  router: NextRouter;
}
