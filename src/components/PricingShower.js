import React from "react";
import styled from "styled-components";

const Table = styled.table`
  border: 0;
  width: 400px;
  margin-bottom: 0px;
  font-family: "M PLUS 1P";
`;

const Tbody = styled.tbody`
  color: #9e2236;
`;

const Tr = styled.tr`
  display: block;
  margin-bottom: 0em;
  padding-bottom: 0px;
  border-bottom: 2px solid #000;
`;

const Th = styled.th`
  display: block;
  border-right: none;
  border-bottom: 2px solid #000 !important;
  padding-top: 28px;
  padding-bottom: 0.6em;
  margin-bottom: 0px;
  color: #9e2236 !important;
`;

const Td = styled.td`
  border-bottom: 1px solid #bbb !important;
  display: block;
  font-size: 1.2em;
  text-align: right !important;
  position: relative;
  padding: 0.625em 0.625em 0.625em 4em;
  border-right: none;
  color: #222457;
  &::before {
    content: attr(data-label);
    font-weight: bold;
    position: absolute;
    left: 10px;
  }
  &:last-child {
    border-bottom: 0;
  }
`;

const Txt = styled.span`
  font-size: 0.5em;
`;

const PreLine = styled.p`
  white-space: pre-line;
`;

const PricingShower = (props) => (
  <>
    <div className="columns">
      <Table>
        <Tbody>
          <Tr>
            <Th>▼シャワーのご利用料金▼</Th>
            {props.pricing.map((el, i) => (
              <Td data-label={el.name} key={i}>
                ¥{el.price}
                <Txt>（税込）</Txt>
              </Td>
            ))}
          </Tr>
        </Tbody>
      </Table>
    </div>
    <div className="columns">
      <PreLine>{props.description}</PreLine>
    </div>
  </>
);

export default PricingShower;
