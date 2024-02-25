import React from 'react'
import PrimaryData from '../components/createReport/primaryData/PrimaryData'
import ActionButtons from '../components/createReport/actionButtons/ActionButtons'
import PreviewTable from '../components/createReport/previewTable/PreviewTable'
import { useSelector } from 'react-redux'


function CreateReport() {
  const { isPreviewClicked, isPreviewClosed } = useSelector((state) => state.join)
  return (
    <>
      <PrimaryData />
      {isPreviewClicked && !isPreviewClosed && <PreviewTable />}
      <ActionButtons />
    </>
  )
}

export default CreateReport