import { Link } from 'react-router-dom';
import { LanguagePicker } from '../LanguagePicker';
import { useTranslation } from '../../hooks/useTranslation';
import TmdbLogo from '../../assets/tmdb/tmdb-logo.svg';
import { FaUserAlt } from 'react-icons/fa';

export const AppHeader = () => {
  const { t } = useTranslation();

  return (
    <header className="w-full flex items-center justify-between px-3 py-2 lg:p-3">
      <div className="flex flex-col items-end -space-y-1 md:ml-40">
        <Link
          to="/"
          className="uppercase font-bold font-josefinSans text-2xl text-orange-500 md:text-4xl"
        >
          {t('appName')}
        </Link>
        <Link
          to="https://www.themoviedb.org/"
          target="_blank"
          className="w-full flex items-center justify-end space-x-1"
        >
          <p className="text-xs">Powered by</p>
          <img src={TmdbLogo} alt="The Movie DB Logo" className="h-2" />
        </Link>
      </div>

      <div className="flex items-center justify-center space-x-0 md:space-x-7">
        <LanguagePicker />
        <Link to="/profile">
          <FaUserAlt className="text-2xl cursor-pointer" />
        </Link>
      </div>
    </header>
  );
};
