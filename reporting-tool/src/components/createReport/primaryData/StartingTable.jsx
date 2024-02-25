import React, { useState } from 'react';
import { Dropdown, DropdownButton, FormControl, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setPreviewData, setTable } from '../../../features/joinSlice';
import ColumnService from '../../../services/ColumnService';

function StartingTable({ tableList = [] }) {
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useDispatch();

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredTableList = tableList.filter((tableObj) =>
        tableObj.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const { isTableSelected, table, isSchemaSelected } = useSelector(state => state.join);

    return (
        <>
            <DropdownButton
                id="joins__starting_table"
                className={!isSchemaSelected ? 'hide' : ''}
                title={isTableSelected ? table.label : 'Pick your starting table'}
            >
                <Dropdown.ItemText className='mb-3'>
                    <InputGroup>
                        <InputGroup.Text><i className="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
                        <FormControl
                            className='searchBox'
                            placeholder='Search for table...'
                            value={searchQuery}
                            onChange={handleSearchChange} />
                    </InputGroup>
                </Dropdown.ItemText>
                {filteredTableList.map((table) => (
                    <Dropdown.Item
                        className='mb-1 d-flex align-items-center'
                        key={table.id}
                        data-table_id={table.id}
                        onClick={() => {
                                dispatch(setTable(table))
                                ColumnService.getColumn(table.id).then(response => dispatch(setPreviewData(response)))
                            }
                        }
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 16 16" role="img" aria-label="table icon" className="Icon Icon-table" width="16" height="16"><path d="M3 3h2.5v2.5H3V3zm7.5 0H13v2.5h-2.5V3zM9.25 3h-2.5v2.5h2.5V3zM3 6.75h2.5v2.5H3v-2.5zm10 0h-2.5v2.5H13v-2.5zm-6.25 0h2.5v2.5h-2.5v-2.5zM5.5 10.5H3V13h2.5v-2.5zm5 0H13V13h-2.5v-2.5zm-1.25 0h-2.5V13h2.5v-2.5z"></path></svg>
                        &nbsp;&nbsp;{table.label}
                    </Dropdown.Item>
                ))}
            </DropdownButton>
        </>
    );
}

export default StartingTable;
