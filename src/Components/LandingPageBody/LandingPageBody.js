import React from "react";
import CourseCurriculum from "../CourseCurriculum/CourseCurriculum";
import "./LandingPageBody.css";
import { Skeleton } from "@mui/material";
import InstructorsSection from "../InstructorsSection/InstructorsSection";
import DescriptionSection from "../DescriptionSection/DescriptionSection";
import ReviewersSection from "../ReviewersSection/ReviewersSection";
import WhatToLearnSection from "../WhatToLearnSection/WhatToLearnSection";
export default function LandingPageBody(course) {
  let loading = Object.entries(course).length === 0;
  return (
    <div className="landing-page-body">
      <WhatToLearnSection {...course} />
      {loading ? (
        <>
          <Skeleton height={100} width={650} />
          <Skeleton height={50} width={450} />
          <Skeleton height={50} width={650} />
          <Skeleton height={50} width={650} />
          <Skeleton height={50} width={650} />
          <Skeleton height={50} width={650} />
        </>
      ) : (
        <CourseCurriculum {...course} />
      )}
      <DescriptionSection {...course} />
      <InstructorsSection {...course} />
      <ReviewersSection {...course} />
    </div>
  );
}
