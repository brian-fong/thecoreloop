"use client";   // Next.js: enable Client component

// Packages
import React, {
  createContext,
  useEffect,
  useState
} from "react";

// thecoreloop Components
import LAG_Create from "@/components/create_lag/LAG_Create";
import LAG_Preview from "@/components/create_lag/LAG_Preview";

// utils
import { ILAG } from "@/utils/types";
import LAG_CATEGORIES from "@/utils/lag-categories";

// LAG Context
const LookAtGaming = createContext({});


export default function Create_LAG(): React.ReactElement {

  const [LAG, setLAG] = useState<ILAG>({
    num: 0,
    date: "",
    subheading: "",
    content: LAG_CATEGORIES.map((category: string) => ({
      category,
      articles: [],
    })),
  });

  useEffect(() => {
    console.log("LAG: ", LAG);
  }, [LAG]);

  return (
    <LookAtGaming.Provider value={{LAG, setLAG}}>
      <main>
        <div className="column-container">

          {/* TCL Logo Container */}
          <div className="tcl-container purple">
            <div className="logo-img-container">
              <img
                src="/thecoreloop-logo-transparent.png"
                className="logo-img"
              />
            </div>

            <p className="quote">
              UI Inspired by{" "}
              <a
                href="https://classic.curve.fi/"
                className="curve-link"
                tabIndex={-1}
              >
                Curve Finance (Classic)
              </a>
            </p>
          </div>

          {/* Create LAG Description Container */}
          <div className="tcl-container gray description">
            <div>
              <h2 className="lag-heading">
                Look at Gaming
              </h2>
              <p className="lag-description">
                A look at some gaming news headlines I found interesting. It's important to look at both web2 and web3 gaming industry news so that we can build the future of gaming.
              </p>
            </div>
          </div>

          <div className="row-container">
            <LAG_Create context={LookAtGaming} />

            <LAG_Preview context={LookAtGaming} />
          </div>
        </div>
      </main>
    </LookAtGaming.Provider>
  );
}
