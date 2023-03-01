import { LanguagePicker } from '../LanguagePicker';
import { useTranslation } from '../../hooks/useTranslation';
import { FaUserAlt } from 'react-icons/fa';

export const AppHeader = () => {
  const { t } = useTranslation();

  return (
    <header className="w-full flex items-center justify-between px-3 py-2 lg:p-3">
      <h1 className="uppercase font-bold font-josefinSans text-2xl text-orange-500 md:ml-40 md:text-4xl">
        {t('appName')}
      </h1>
      <div className="flex items-center justify-center space-x-2 md:space-x-7">
        <LanguagePicker />
        <FaUserAlt className="text-2xl cursor-pointer" />
      </div>
    </header>
  );
};
