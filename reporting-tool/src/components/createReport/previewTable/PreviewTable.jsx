import React from 'react'
import DataTable from '../../dataTable/DataTable'
import { useSelector } from 'react-redux'

export default function PreviewTable() {
  const {previewData} = useSelector((state) => state.join)
  return (
    <DataTable data={previewData} />
  )
}
