import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { FaArrowCircleRight } from 'react-icons/fa';

export const Navbar = () => {
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [isSearchHidden, setIsSearchHidden] = useState(true);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [prevY, setPrevY] = useState(document.body.getBoundingClientRect().top);
  const searchInput = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();

  const detectScrollDirection = () => {
    const currentY = document.body.getBoundingClientRect().top;

    if (currentY < prevY && currentY < -125 && isSearchFocused === false) {
      setIsNavHidden(true);
    } else {
      setIsNavHidden(false);
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
        'w-full sticky overflow-hidden py-2 px-8 bg-slate-800 text-white duration-500' +
        (isNavHidden ? ' -top-20' : ' top-0')
      }
    >
      <nav className="flex mx-auto max-w-xl items-center justify-between md:text-lg">
        <div
          className={
            'absolute max-w-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  duration-500 ease-out' +
            (isSearchHidden
              ? ' w-0 opacity-0 -z-10'
              : ' w-11/12 opacity-100 z-10')
          }
        >
          <input
            name="search"
            id="search"
            type="text"
            placeholder={t('searchPlaceholder')}
            className={
              'absolute max-w-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg outline-none font-light text-slate-800 duration-300 ease-out' +
              (isSearchHidden
                ? ' w-0 p-0 opacity-0'
                : ' w-full px-3 py-1 opacity-100')
            }
            ref={searchInput}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => {
              setIsSearchHidden(true);
              setIsSearchFocused(false);
            }}
          />
          <FaArrowCircleRight
            className={
              'absolute top-1/2 -translate-y-1/2 right-1 text-green-600 text-3xl cursor-pointer duration-500' +
              (isSearchHidden ? ' opacity-0' : ' opacity-100 delay-300')
            }
          />
        </div>

        <Link
          to="/"
          className={
            'p-1 duration-500' + (isSearchHidden ? '' : ' -translate-x-28')
          }
        >
          {t('forum')}
        </Link>
        <label
          htmlFor="search"
          className={
            'p-1 cursor-pointer text-center ease-out' +
            (isSearchHidden
              ? ' translate-y-0 opacity-100 duration-500 delay-100'
              : ' -translate-y-20 opacity-0 duration-500')
          }
          onClick={() => {
            setIsSearchHidden(false);
          }}
        >
          {t('search')}
        </label>
        <Link
          to="/"
          className={
            'p-1 duration-500' + (isSearchHidden ? '' : ' translate-x-28')
          }
        >
          {t('favourites')}
        </Link>
      </nav>
    </div>
  );
};
