"use client";
import { useState } from "react";
import NavWrapper from "@/Components/NavWrapper/NavWrapper";
import NavListWrapper from "@/Components/NavListWrapper/NavListWrapper";
import NavContent from "@/Components/NavContent/NavContent";
import NavModalButton from "@/Components/NavModalButton/NavModalButton";
import NavList from "@/Components/NavList/NavList";
import NavModal from "@/Components/NavModal/NavModal";
import SrbobranDanasSvg from "@/Components/SrbobrandanasSvg/SrbobranDanasSvg";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

export default function NavData({ menuArray }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openNavModal = () => {
    setIsModalOpen(true);
  };

  const closeNavModal = () => {
    setIsModalOpen(false);
  };

  const navListProps = {
    mainMenuUl: "sm:flex  text-xs items-center gap-x-2 lg:flex gap-x-12",
    mainMenuLinks:
      "list-none sm:text-xs lg:text-base font-semibold mx-3  leading-6 text-gray-900 hover:text-gray-400 dark:text-slate-200 dark:hover:text-slate-400",
  };

  const navModalProps = {
    modalDiv: "lg:flex lg:gap-x-12",
    modalLinks:
      "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-slate-200 dark:hover:text-slate-400",
  };

  return (
    <NavWrapper>
      <NavContent>
        <SrbobranDanasSvg svgClass={"h-10 w-auto "} />
        <NavModalButton openNavModal={openNavModal} isModalOpen={isModalOpen} />
        <NavListWrapper>
          <NavList
            menuArray={menuArray}
            mainMenuUl={navListProps.mainMenuUl}
            mainMenuLinks={navListProps.mainMenuLinks}
          />
        </NavListWrapper>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ThemeSwitch />
        </div>
      </NavContent>

      {isModalOpen && (
        <NavModal
          menuArray={menuArray}
          closeNavModal={closeNavModal}
          modalDiv={navModalProps.modalDiv}
          modalLinks={navModalProps.modalLinks}
          isModalOpen={isModalOpen}
        />
      )}
    </NavWrapper>
  );
}
