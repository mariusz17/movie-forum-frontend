import { LanguagePicker } from '../LanguagePicker';

export const AppHeader = () => {
  return (
    <header className="w-full flex justify-between p-2 lg:p-4">
      <h1 className="text-4xl font-bold text-orange-500 lg:ml-40">
        Movie Forum
      </h1>

      <LanguagePicker />
    </header>
  );
};
