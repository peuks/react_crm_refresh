import React, { useState } from "react";

const TagTable = ({ children, theme }) => {
  /**
   * Do not use Switch Case !
   * TODO use props with tw component
   */
  switch (theme) {
    case "active":
      theme = "bg-purple-200 text-purple-600";
    case "scheduled":
      theme = "bg-yellow-200 text-yellow-600";
    case "pending":
      theme = "bg-red-200 text-red-600";

    default:
      theme = "text-green-600 bg-green-200";
  }
  return (
    <div className={`px-3 py-1 text-xs rounded-full ${theme}`}>
      <span className="px-3 py-1 text-xs rounded-full">{children}</span>
    </div>
  );
};

export default TagTable;
