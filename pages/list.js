import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Data from '../data/country_average.json';
import styles from '../styles/list.module.scss';

const List = () => {
  return (
    <div className={styles.container}>
      <h1> Countries and their annual average CO2e emission </h1>
      <p className={styles.tag__line}>
        This list would be converted to a list of top carbon conservative users
      </p>
      <TableContainer style={{ width: '50vw', colo: 'white' }}>
        <Table stickyHeader>
          <TableHead
            style={{
              backgroundColor: '#7e4016',
              color: 'white',
            }}
          >
            <TableCell>Country name</TableCell>
            <TableCell>Country tag</TableCell>
            <TableCell>Country emission</TableCell>
          </TableHead>
          {Data.map((data, index) => {
            return (
              <TableRow key={index} style={{ color: 'white' }}>
                <TableCell align='left'>{data.Country}</TableCell>
                <TableCell align='left'> {data.Code}</TableCell>
                <TableCell align='left'> {data.emission}</TableCell>
              </TableRow>
            );
          })}
        </Table>
      </TableContainer>
    </div>
  );
};

export default List;
