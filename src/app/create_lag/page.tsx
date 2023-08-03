"use client";
import React, {
  createContext,
  useEffect,
  useState
} from "react";
import TCL_Logo from "@/components/core/TCL_Logo";
import LAG_Create from "@/components/create_lag/LAG_Create";
import LAG_Preface from "@/components/create_lag/LAG_Preface";
import LAG_Preview from "@/components/create_lag/LAG_Preview";
import { ILAG } from "@/utils/types";
import { LAG_CATEGORIES } from "@/utils/lag-categories";
import LAG_SAMPLE from "@/utils/lag-samples";

// LAG Context
const LookAtGaming = createContext({});


export default function Create_LAG(): React.ReactElement {

  const LAG_EMPTY: ILAG = {
    num: 0,
    date: "",
    subheading: "",
    content: LAG_CATEGORIES.map((category: string) => ({
      category,
      articles: [],
    })),
    footer: "",
  };

  // const [LAG, setLAG] = useState<ILAG>(LAG_EMPTY);
  const [LAG, setLAG] = useState<ILAG>(LAG_SAMPLE);

  useEffect(() => {
    console.log("LAG: ", LAG);
  }, [LAG]);

  return (
    <LookAtGaming.Provider value={{LAG, setLAG}}>
      <main className="root-container">
        <TCL_Logo />

        <LAG_Preface />

        <div className="body-container">
          <LAG_Create context={LookAtGaming} />

          <LAG_Preview context={LookAtGaming} />
        </div>
      </main>
    </LookAtGaming.Provider>
  );
}
