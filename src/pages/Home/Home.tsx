import { useTranslation } from '../../hooks/useTranslation';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="text-4xl text-orange-500 text-center mt-10">
        Hello World
      </h1>
      <h3>{t('welcome')}</h3>
    </>
  );
};
