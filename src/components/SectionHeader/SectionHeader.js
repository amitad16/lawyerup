import React, { Fragment } from "react";
import SectionTitle from "./SectionTitle";
import SectionSubtitle from "./SectionSubtitle";

const SectionHeader = ({ title, subtitle, children }) => {
  if (children) return children;
  else
    return (
      <div className="section-header">
        <SectionTitle>{title}</SectionTitle>
        <SectionSubtitle>{subtitle}</SectionSubtitle>
      </div>
    );
};

export default SectionHeader;
