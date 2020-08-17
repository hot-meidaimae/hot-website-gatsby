import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  table-layout: fixed;
  margin-bottom: 0px;
  margin-top: 1rem;
`;

const Tbody = styled.tbody`
  color: #9e2236;
`;

const Tr = styled.tr`
  background-color: #fff;
  padding: 0.35em;
  border-bottom: 1px dotted #8bc34a;
  &:last-child {
    border-bottom: 2px solid #18521b;
  }
`;

const Th = styled.th`
  padding: 0.5em 0.5em 0.5em 0.5em;
  color: #9e2236 !important;
  border: 1px solid #d1d1d1 !important;
  border-width: 1px !important;
`;

const Td = styled.td`
  padding: 0.5em 0.5em 0.5em 0.5em;
  text-align: center !important;
  font-size: 1.5em;
  border: 1px solid #d1d1d1 !important;
  border-width: 1px !important;
  color: #222457;
`;

const Num = styled.span`
  font-size: 1.5em;
`;
const Txt = styled.span`
  font-size: 0.5em;
`;

const PreLine = styled.p`
  white-space: pre-line;
`;

const Pricing = (props) => (
  <>
    <div className="columns">
      <PreLine>{props.description}</PreLine>
    </div>
    <div className="columns">
      <Table>
        <thead>
          <Tr>
            <Th>&nbsp;</Th>
            <Th>オープン席</Th>
            <Th>個室席</Th>
          </Tr>
        </thead>
        <Tbody>
          {props.pricing.map((el, i) => (
            <Tr key={i}>
              <Th>
                <PreLine>{el.name}</PreLine>
              </Th>
              {el.boothPrice === el.openPrice ? (
                <Td colSpan={2}>
                  ¥{el.boothPrice}
                  <Txt>（税込¥{el.boothPriceTax}）</Txt>
                </Td>
              ) : (
                <>
                  <Td>
                    ¥{el.boothPrice}
                    <Txt>（税込¥{el.boothPriceTax}）</Txt>
                  </Td>
                  <Td>
                    ¥{el.openPrice}
                    <Txt>（税込¥{el.openPriceTax}）</Txt>
                  </Td>
                </>
              )}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  </>
);

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
};

export default Pricing;
