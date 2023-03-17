import { FC } from 'react';

export type ComponentType = FC<{
  modalIsOpen: boolean;
  closeModal: () => void;
  afterOpenModal?: () => void;
  contentLabel?: string;
}>;
