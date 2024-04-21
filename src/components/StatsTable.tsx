import React from "react";
import { Table } from "@mantine/core";
import data from "../assets/wineData.json";

function StatsTable({ classes, name }) {
  //declaring variables for results, key will be the classes, value will be the required answer.
  let mean = {};
  let median = {};
  let mode = {};

  for (let key in classes) {
    let arr = classes[key];
    arr.sort();

    //calculating mean

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    mean[key] = sum / arr.length;

    //calculating median

    if (arr.length % 2 == 0) {
      median[key] = (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
    } else {
      median[key] = arr[Math.floor(arr.length / 2)];
    }

    //calculating mode

    const frequency = {};

    arr.forEach((value) => {
      frequency[value] = (frequency[value] || 0) + 1;
    });

    let maxfreq = 0;
    for (const x in frequency) {
      if (frequency[x] > maxfreq) {
        maxfreq = frequency[x];
        mode[key] = x;
      }
    }
  }

  return (
    <>
      <h2>{name}</h2>
      <Table
        styles={{
          table: { borderCollapse: "collapse" },
          td: { padding: "12px" },
          th: { padding: "12px" },
        }}
        className="table-bordered"
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Measure</Table.Th>
            {Object.keys(classes).map((key) => (
              <Table.Th>Class {key}</Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        {/* <Table.Tbody>{rows}</Table.Tbody> */}
        <Table.Tbody>
          <Table.Tr>
            <Table.Th>{name} mean</Table.Th>
            {Object.keys(mean).map((key) => (
              <Table.Td>{parseFloat(mean[key]).toFixed(3)}</Table.Td>
            ))}
          </Table.Tr>
          <Table.Tr>
            <Table.Th>{name} median</Table.Th>
            {Object.keys(median).map((key) => (
              <Table.Td>{parseFloat(median[key]).toFixed(3)}</Table.Td>
            ))}
          </Table.Tr>
          <Table.Tr>
            <Table.Th>{name} mode</Table.Th>
            {Object.keys(mode).map((key) => (
              <Table.Td>{parseFloat(mode[key]).toFixed(3)}</Table.Td>
            ))}
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </>
  );
}

export default StatsTable;
