import { useState } from 'react';
import Modal from 'react-modal';
import { useTranslation } from '../../hooks/useTranslation';

import { ComponentType } from './types';

Modal.setAppElement('#root');

export const AuthModal: ComponentType = ({
  modalIsOpen,
  closeModal,
  afterOpenModal,
  contentLabel,
}) => {
  const [isRegisterFormActive, setIsRegisterFormActive] =
    useState<boolean>(false);
  const { t } = useTranslation();

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      overlayClassName="fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center bg-white bg-opacity-40 backdrop-blur-sm"
      className="w-11/12 outline-none p-6 rounded-lg shadow-lg shadow-gray-800 bg-slate-800 md:p-8 lg:w-5/12"
      contentLabel={contentLabel}
    >
      <form className="w-full flex flex-col items-center overflow-hidden">
        <div className="w-full mb-6 flex items-center justify-center text-lg md:text-xl text-white">
          <div
            className={
              'w-[46%] select-none text-right' +
              (isRegisterFormActive ? '' : ' font-bold text-orange-500')
            }
          >
            <span
              className="cursor-pointer"
              onClick={() => setIsRegisterFormActive(false)}
            >
              {t('signIn')}
            </span>
          </div>
          <div className="w-[8%] flex items-center justify-center">|</div>
          <div
            className={
              'w-[46%] select-none text-left' +
              (isRegisterFormActive ? ' font-bold text-orange-500' : '')
            }
          >
            <span
              className="cursor-pointer"
              onClick={() => setIsRegisterFormActive(true)}
            >
              {t('register')}
            </span>
          </div>
        </div>
        <div
          className={
            'w-full relative duration-300' +
            (isRegisterFormActive ? ' h-10 mb-6' : ' h-0 overflow-hidden')
          }
        >
          <input
            name="username"
            type="text"
            placeholder={t('username')}
            className={
              'w-full p-2 rounded-md text-black font-thin outline-none duration-500 ease-out' +
              (isRegisterFormActive
                ? ' opacity-100 delay-200'
                : ' opacity-0 translate-y-1/2')
            }
            disabled={!isRegisterFormActive}
          />
        </div>
        <input
          name="email"
          type="text"
          placeholder={t('email')}
          className="w-full mb-6 p-2 rounded-md text-black font-thin outline-none"
        />
        <input
          name="password"
          type="password"
          placeholder={t('password')}
          className="w-full mb-6 p-2 rounded-md text-black font-thin outline-none"
        />
        <div
          className={
            'w-full relative duration-300' +
            (isRegisterFormActive ? ' h-10 mb-6' : ' h-0 overflow-hidden')
          }
        >
          <input
            name="password2"
            type="password"
            placeholder={t('repeatPassword')}
            className={
              'w-full p-2 rounded-md text-black font-thin outline-none duration-500 ease-out' +
              (isRegisterFormActive
                ? ' opacity-100 delay-200'
                : ' opacity-0 translate-y-1/2')
            }
            disabled={!isRegisterFormActive}
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 rounded-md bg-orange-500 text-white font-bold md:text-lg"
        >
          {isRegisterFormActive ? t('register') : t('signIn')}
        </button>
      </form>
    </Modal>
  );
};
