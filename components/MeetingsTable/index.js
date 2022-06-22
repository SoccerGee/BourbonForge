import React from 'react';

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const MeetingsTable = ({ meetings, ...rest }) => {
  const formatMeetingDate = d => {
      const date = new Date(d);
      return `${date.getMonth()} / ${date.getDay()} / ${date.getFullYear()}`;
  }

  return (
    <TableContainer component={Paper} {...rest}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {meetings &&
            meetings.map((meeting, index) => (
              <TableRow
                key={meeting.meetingDate}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{index}</TableCell>
                <TableCell>{formatMeetingDate(meeting.meetingDate)}</TableCell>
                <TableCell>{meeting.location}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MeetingsTable;
