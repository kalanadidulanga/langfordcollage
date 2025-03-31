"use client";
import { useState, useCallback } from "react";

export const useModal = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const [isOpen1, setIsOpen1] = useState(initialState);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);
  const toggleModal = useCallback(() => setIsOpen((prev) => !prev), []);
  const openModal1 = useCallback(() => setIsOpen1(true), []);
  const closeModal1 = useCallback(() => setIsOpen1(false), []);
  const toggleModal1 = useCallback(() => setIsOpen1((prev) => !prev), []);

  return { isOpen, openModal, closeModal, toggleModal , isOpen1, openModal1, closeModal1, toggleModal1};
};
