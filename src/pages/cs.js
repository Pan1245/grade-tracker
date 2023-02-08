import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import CSMain from "../components/csMain";

export const Head = () => <title>Computer Science</title>;

const ComputerScience = () => {
  return (
    <Layout>
      <CSMain></CSMain>
    </Layout>
  );
};

export default ComputerScience;
