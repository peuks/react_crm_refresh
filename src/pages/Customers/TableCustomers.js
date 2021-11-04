import React from "react";
import Col from "./Table/Col";
import Row from "./Table/Row";
import TagTable from "./Table/Tag";
import Tbody from "./Table/Tbody";
import Thead from "./Table/Thead";
import tw from "tailwind-styled-components";
import { motion } from "framer-motion";
import { numberWithSpaces, roundedNumber } from "utils";
const TableCustomers = ({ customers }) => {
  return (
    <Table>
      <Thead
        col={[
          "ID",
          "CLIENT",
          "EMAIL",
          "ENTREPRISE",
          "FACTURES",
          "MONTANT TOTAL",
          "ACTION",
        ]}
      />
      <Tbody>
        {customers.map((e) => {
          return (
            <Row>
              <Col>
                <div class="flex items-center">
                  <div class="mr-2">
                    <img
                      class="w-6 h-6"
                      src="https://img.icons8.com/color/48/000000/php.png"
                    />
                  </div>
                  <span class="font-medium">{e.id}</span>
                </div>
              </Col>
              <Col>
                <div class="flex items-center">
                  <div class="mr-2">
                    <img
                      class="w-6 h-6 rounded-full"
                      src="http://unsplash.it/32/32?random&gravity=center"
                    />
                  </div>
                  <span>{`${e.firstName} ${e.lastName}`}</span>
                </div>
              </Col>
              <Col>
                <div class="flex items-center">
                  <div class="mr-2">
                    <span>{e.email}</span>
                  </div>
                </div>
              </Col>
              <Col>
                <div class="flex items-center">
                  <div class="mr-2">
                    <span>{e.company}</span>
                  </div>
                </div>
              </Col>
              <Col>
                <div class="flex items-center">
                  <div class="mr-2">
                    <span>{e.invoices.length}</span>
                  </div>
                </div>
              </Col>
              <Col>
                <div class="flex items-center">
                  <div class="mr-2">
                    <span>
                      {numberWithSpaces(roundedNumber(e.totalAmount))} €
                    </span>
                  </div>
                </div>
              </Col>

              <Col>
                <div class="flex justify-center item-center">
                  <div class="mr-2 w-4 transform hover:text-purple-500 hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <div class="mr-2 w-4 transform hover:text-purple-500 hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </div>
                  <div class="mr-2 w-4 transform hover:text-purple-500 hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </div>
                </div>
              </Col>
            </Row>
          );
        })}
      </Tbody>
    </Table>
  );
};

const Table = tw.table`overflow-hidden w-full min-w-max border-b border-gray-200 shadow table-auto sm:rounded-lg`;
export default TableCustomers;
