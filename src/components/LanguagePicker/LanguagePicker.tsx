import { useContext } from 'react';
import { LanguageContext } from '../../context/Language';

export const LanguagePicker = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="relative p-2 text-sm">
      <div
        className={
          `duration-200 absolute bg-slate-800 w-8 h-7 rounded-md top-[4px] left-[17px] ` +
          (language === 'pl' ? `` : `translate-x-[50px]`)
        }
      ></div>
      <button
        className={
          `duration-200 relative leading-3 px-4 border-r border-black ` +
          (language === 'pl' ? `text-white` : `text-black`)
        }
        onClick={() => setLanguage('pl')}
      >
        PL
      </button>
      <button
        className={
          `duration-200 relative px-4 ` +
          (language === 'en' ? `text-white` : `text-black`)
        }
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
    </div>
  );
};
