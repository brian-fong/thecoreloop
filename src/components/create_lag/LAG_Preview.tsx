// Packages
import React, { useContext } from "react";
import {
  BsTelegram as TelegramIcon,
} from "react-icons/bs";

// utils
import { getTodaysDate } from "@/utils/date";


export default function LAG_Preview({
  context,
}: any): React.ReactElement {

  const { LAG, setLAG } = useContext(context) as any;

  return (
    <div className="tcl-container gray">
      <div className="preview-heading-container">
        <TelegramIcon size="2rem" color="#229ED9" />
        <h2 className="lag-heading preview">
          Telegram Preview
        </h2>
      </div>

      <div className="lag-preview">
        <h3 className="heading">
          {`Look at Gaming #`}
          <span>
            {LAG.num
              ? LAG.num
              : "XYZ"
            }
          </span>
          {` | `}
          <span>
            {LAG.date
              ? LAG.date
              : getTodaysDate()
            }
          </span>
        </h3>

        <p className="subheading">
          {LAG.subheading}
        </p>
      </div>
    </div>
  );
}
