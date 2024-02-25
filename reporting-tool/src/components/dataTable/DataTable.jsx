import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import CContainer from '../../components/card/CContainer';
import CLabel from '../../components/card/CLabel';
import CBody from '../../components/card/CBody';
import CloseButton from '../closeButton/CloseButton';

function DataTable({ data=[], searchable=false, pagination=false }) {
  const [isDataEmpty, setDataEmpty] = useState(data.length == 0);
  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <CContainer>
      <div className="label d-flex justify-content-between">
        <CLabel variant={'text-dark'} label={'Preview'} />
        <CloseButton />
      </div>
      {isDataEmpty && <h6 className='text-secondary '>No records found</h6>}
      <CBody className={`datatable border shadow-lg rounded ${isDataEmpty && 'hide'}`}>
        <Table borderless>
          <thead className='sticky-top border-bottom'>
            <tr>
              {headers.map(head => <th className='text-primary px-3' key={head}>{head}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.id}>
                {headers.map(header => (
                  <td
                    className='text-secondary pointer px-3'
                    key={header}>{row[header].toString()}</td>

                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </CBody>
    </CContainer>

  );
}

export default DataTable;
