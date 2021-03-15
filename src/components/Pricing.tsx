import React from "react";
import classes from "./Pricing.module.scss";

type Props = {
  description: string;
  pricing: {
    name: string;
    boothPrice: number;
    boothPriceTax: number;
    openPrice: number;
    openPriceTax: number;
  }[];
};

const Pricing: React.FC<Props> = (props) => (
  <>
    <div className="columns">
      <div className={classes.PreLine}>{props.description}</div>
    </div>
    <div className="columns">
      <table className={classes.Table}>
        <thead>
          <tr className={classes.Tr}>
            <th className={classes.Th}>&nbsp;</th>
            <th className={classes.Th}>オープン席</th>
            <th className={classes.Th}>個室席</th>
          </tr>
        </thead>
        <tbody className={classes.Tbody}>
          {props.pricing.map((el, i) => (
            <tr className={classes.Tr} key={i}>
              <th className={classes.Th}>
                <div className={classes.PreLine}>{el.name}</div>
              </th>
              {el.boothPrice === el.openPrice ? (
                <td className={classes.Td} colSpan={2}>
                  ¥{el.boothPrice}
                  <span className={classes.Txt}>
                    （税込¥{el.boothPriceTax}）
                  </span>
                </td>
              ) : (
                <>
                  <td className={classes.Td}>
                    ¥{el.boothPrice}
                    <span className={classes.Txt}>
                      （税込¥{el.boothPriceTax}）
                    </span>
                  </td>
                  <td className={classes.Td}>
                    ¥{el.openPrice}
                    <span className={classes.Txt}>
                      （税込¥{el.openPriceTax}）
                    </span>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
);

export default Pricing;
