import React, { useEffect } from 'react'
import CBody from '../../card/CBody'
import StartingSchema from './StartingSchema'
import StartingTable from './StartingTable'
import { useDispatch, useSelector } from 'react-redux';
import {OverlayTrigger, Tooltip } from 'react-bootstrap';
import { setSchemaList, setPreviewClicked, setPreviewClosed, setTableList } from '../../../features/joinSlice';
import SchemaService from '../../../services/SchemaService';
import TableService from '../../../services/TableService';
import CLabel from '../../card/CLabel';
import CContainer from '../../card/CContainer';

function PrimaryData() {

  const dispatch = useDispatch()
  const { isTableSelected, isSchemaSelected, schema, schemaList, tableList } = useSelector(state => state.join);

    useEffect(() => {
      SchemaService.getSchema().then(response => dispatch(setSchemaList(response)))
    }, [])

    useEffect(() => {
      if(isSchemaSelected) {
        TableService.getTables(schema.id).then(response => dispatch(setTableList(response)))
      }
    }, [schema]);

  return (
    <CContainer>
      <CLabel variant={'text-primary'} label={'Data'} />
      <div className='d-flex align-items-center'>
        <CBody className={'color-primary py-3'}>
          <StartingSchema schemaList={schemaList} />
          <StartingTable tableList={tableList} />
        </CBody>
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-play" className='fw-semibold' style={{fontSize: '12px'}}>Preview</Tooltip>}
        >
          <div 
            className={`ms-3 preview-data d-inline pointer ${!isTableSelected ? 'hide' : ''}`}
            onClick={() => {
                dispatch(setPreviewClicked(true))
                dispatch(setPreviewClosed(false))
              }
            }
          >
            <i className="fa-solid fa-play"></i>
          </div>
        </OverlayTrigger>
      </div>
    </CContainer>
  );
}

export default PrimaryData;