
"use client";

import { useMediaQuery } from "@hooks/useMediaQuery";
import React from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const Nav = () => {
  const md = useMediaQuery("md");
  if (md) {
    return <NavDesktop />;
  } else {
    return <NavMobile />;
  }

export default Nav;
