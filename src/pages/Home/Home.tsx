import { useTranslation } from '../../hooks/useTranslation';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center">
      <div className="p-4 bg-slate-800 shadow-lg shadow-gray-800 rounded-lg text-white">
        <h3>{t('welcomeHeading')}</h3>
        <p className="mt-4">{t('welcomeText')}</p>
      </div>
    </div>
  );
};
