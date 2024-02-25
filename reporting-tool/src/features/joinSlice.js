import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSchemaSelected: false,
    schema: null,
    schemaList: [],
    isTableSelected: false,
    table: null,
    tableList: [], 
    isPreviewClicked: false,
    previewData: null,
    isPreviewClosed: true
}

const joinSlice = createSlice({
    name: 'join',
    initialState,
    reducers: {
        setSchema: (state, action) => {
            state.isSchemaSelected = true;
            state.schema = action.payload;
        },
        setTable: (state, action) => {
            state.isTableSelected = true;
            state.table = action.payload;
        },
        setSchemaList: (state, action) => {
            state.schemaList = action.payload;
        },
        setTableList: (state, action) => {
            state.tableList = action.payload;
        },
        setPreviewData: (state, action) => {
            state.previewData = action.payload;
        },
        setPreviewClicked: (state, action) => {
            state.isPreviewClicked = action.payload;
        },
        setPreviewClosed: (state, action) => {
            state.isPreviewClosed = action.payload;
        },
    }
})

export const { setSchema, setTable, setSchemaList, setTableList, setPreviewData, setPreviewClicked,
    setPreviewClosed } = joinSlice.actions;
export default joinSlice.reducer;
