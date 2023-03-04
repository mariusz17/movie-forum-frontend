import { useContext } from 'react';
import { LanguageContext } from '../../context/Language';

export const LanguagePicker = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="relative flex items-center justify-center text-sm">
      <div
        className={
          `duration-200 absolute bg-slate-800 w-8 h-7 rounded-md top-1/2 -translate-y-1/2 left-[10px]` +
          (language === 'pl' ? `` : ` translate-x-[52px]`)
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
