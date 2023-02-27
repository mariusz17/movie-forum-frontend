import { useContext } from 'react';
import { LanguageContext } from '../../context/Language';

export const LanguagePicker = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="relative p-2">
      <div
        className={
          `duration-200 absolute bg-slate-800 w-9 h-6 rounded-md ` +
          (language === 'pl' ? `left-[16px]` : `left-[68px]`)
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
