import React, { useState } from 'react';
import { Dropdown, DropdownButton, FormControl, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setSchema } from '../../../features/joinSlice';

function StartingSchema({ schemaList = [] }) {
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useDispatch();

    const filteredSchemaList = schemaList.filter((schema) =>
        schema.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const { isSchemaSelected, schema } = useSelector(state => state.join);

    return (
        <>
            <DropdownButton
                id="joins__starting_schema"
                title={isSchemaSelected ? schema.label : 'Pick your schema'}>
                <Dropdown.ItemText className='mb-3'>
                    <InputGroup>
                        <InputGroup.Text><i className="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
                        <FormControl
                            className='searchBox'
                            placeholder='Search for schema...'
                            value={searchQuery}
                            onChange={(event) => setSearchQuery(event.target.value)} />
                    </InputGroup>
                </Dropdown.ItemText>
                {filteredSchemaList.map((schema) => (
                    <Dropdown.Item
                        className='mb-1 d-flex align-items-center'
                        key={schema.id}
                        data-schema_id={schema.id}
                        onClick={() => dispatch(setSchema(schema))}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="rgba(80, 158, 227)" viewBox="0 0 16 16" role="img" aria-label="database icon" className="Icon Icon-schema Icon text-default" width="18" height="18"><path fillRule="evenodd" d="M2.665 13.67A.75.75 0 0 1 2.25 13V3a.75.75 0 0 1 .415-.67l.002-.002.002-.001.008-.004.024-.011a7.465 7.465 0 0 1 .38-.164c.255-.103.623-.236 1.088-.37A14.023 14.023 0 0 1 8 1.25c1.583 0 2.903.264 3.831.529.465.133.833.266 1.088.368a7.5 7.5 0 0 1 .38.165l.024.011.008.004.003.001L13 3l.335-.671A.751.751 0 0 1 13.75 3v10a.75.75 0 0 1-.415.67l-.002.002-.002.001-.008.004-.024.011a7.443 7.443 0 0 1-.38.164 11.33 11.33 0 0 1-1.088.37A14.02 14.02 0 0 1 8 14.75a14.02 14.02 0 0 1-3.831-.529 11.327 11.327 0 0 1-1.088-.368 7.409 7.409 0 0 1-.38-.165l-.024-.011-.008-.004-.002-.001-.002-.001zM3.75 3.497c.207-.079.487-.177.831-.275A12.524 12.524 0 0 1 8 2.75c1.417 0 2.597.236 3.419.471.344.098.624.196.831.275v1.24l-.096.038c-.327.133-.642.26-1.106.388-.674.185-1.604.338-3.048.338s-2.374-.153-3.049-.338a8.97 8.97 0 0 1-1.106-.388l-.095-.039V3.496zm7.695 3.113c.289-.08.559-.171.805-.262v2.388l-.096.04c-.327.132-.642.26-1.106.387-.674.185-1.604.338-3.048.338s-2.374-.153-3.049-.338a8.97 8.97 0 0 1-1.201-.427V6.347c.246.091.516.182.805.262C5.378 6.834 6.444 7 8 7c1.556 0 2.621-.166 3.445-.391zM3.75 10.347v2.157c.207.079.487.177.831.275A12.52 12.52 0 0 0 8 13.25a12.52 12.52 0 0 0 3.419-.471c.344-.098.624-.196.831-.275v-2.157c-.246.09-.516.182-.805.261-.824.226-1.89.393-3.445.393-1.556 0-2.622-.167-3.445-.393a9.777 9.777 0 0 1-.805-.26z" clipRule="evenodd"></path></svg>
                        &nbsp;&nbsp;{schema.label}
                    </Dropdown.Item>
                ))}
            </DropdownButton>
        </>
    );
}

export default StartingSchema;
