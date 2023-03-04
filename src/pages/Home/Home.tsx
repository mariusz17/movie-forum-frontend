import { useTranslation } from '../../hooks/useTranslation';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center">
      <div className="p-3 bg-slate-800 shadow-md shadow-gray-700 rounded-md text-white">
        <h3>{t('welcomeHeading')}</h3>
        <p className="mt-4">{t('welcomeText')}</p>
      </div>
    </div>
  );
};
