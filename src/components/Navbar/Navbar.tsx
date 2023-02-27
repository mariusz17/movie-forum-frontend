import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';

export const Navbar = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [prevY, setPrevY] = useState(document.body.getBoundingClientRect().top);
  const { t } = useTranslation();

  const detectScrollDirection = () => {
    const currentY = document.body.getBoundingClientRect().top;

    if (currentY < prevY && currentY < -125) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }

    setPrevY(document.body.getBoundingClientRect().top);
  };

  useEffect(() => {
    window.addEventListener('scroll', detectScrollDirection);
    return () => window.removeEventListener('scroll', detectScrollDirection);
  }, [prevY]);

  return (
    <div
      className={
        'w-full sticky top-0 p-4 bg-slate-800 text-white duration-500' +
        (isHidden ? ' -top-20' : '')
      }
    >
      <nav className="flex mx-auto max-w-xl items-center justify-around lg:text-lg">
        <Link to="/" className="hover:text-orange-400">
          {t('forum')}
        </Link>
        <button className="hover:text-orange-400">{t('search')}</button>
        <Link to="/" className="hover:text-orange-400">
          {t('favourites')}
        </Link>
      </nav>
    </div>
  );
};
