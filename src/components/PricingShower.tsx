import React from "react";

import classes from "./PricingShower.module.scss";

type Props = {
  pricing: {
    name: string;
    price: number;
  }[];
  description: string;
};

const PricingShower: React.FC<Props> = (props) => (
  <>
    <table className={classes.Table}>
      <tbody className={classes.Tbody}>
        <tr className={classes.Tr}>
          <th className={classes.Th}>▼シャワーのご利用料金▼</th>
          {props.pricing.map((el, i) => (
            <td className={classes.Td} data-label={el.name} key={i}>
              ¥{el.price}
              <span className={classes.Txt}>（税込）</span>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
    <p className={classes.PreLine}>{props.description}</p>
  </>
);

export default PricingShower;
