import type { ReactElement } from 'react';
import { LayoutBase } from '@eliascerne/layout/base';
import { CardsUi } from '@eliascerne/cards/ui';
import { CardsLayout } from '@eliascerne/cards/layout';
import { UilAirplay } from '@iconscout/react-unicons';

import styles from './index.module.css';

export function Home() {
  return (
    <div className="grid grid-flow-row grid-cols-1 grid-rows-3 gap-4 pt-6 md:grid-cols-3 lg:grid-cols-4">
      <CardsUi
        size="small"
        type="blog"
        image="https://cdn.pocket-lint.com/r/s/970x/assets/images/158839-laptops-review-apple-macbook-pro-14-inch-review-image2-ribxgzs9jt-jpg.webp"
        title="Why serverless is the way to go"
        description="Tailwindcss is being used for fast and ✨beautiful✨ styling like this website is."
        author="Elias Cerne"
        buttonText="Visit"
        buttonIcon={true}
        link="https://tailwindcss.com"
      />
      <CardsUi
        size="small"
        type="about"
        image="https://r2.eriascdn.com/erias.png"
        description="Hello👋 I'm Elias, an Austrian student and Web Developer. I work with Next.js, Tailwind, Figma and a MacBook."
      />
      <CardsUi
        size="small"
        type="link"
        image="https://upload.wikimedia.org/wikipedia/commons/9/95/Tailwind_CSS_logo.svg"
        description="Tailwindcss is being used for fast and ✨beautiful✨ styling like this website is."
        buttonText="Visit"
        buttonIcon={true}
        link="https://tailwindcss.com"
      />
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <LayoutBase>{page}</LayoutBase>;
};

export default Home;
