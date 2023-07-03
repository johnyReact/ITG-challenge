import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Data, IInstitutionsGridProps, Institution } from './InstitutionsGrid.types';
import Button from '../../atom/button/Button';
import styles from './InstitutionsGrid.module.scss';
import { useDeleteMutation } from '../../../sevices/apiCall';
import endpoints from '../../../api/endpoints';
import { toast } from 'react-toastify';
const InstitutionGrid: React.FC<IInstitutionsGridProps> = ({ gridData, onEdit }) => {
  const [deleteInstitution, { isLoading }] = useDeleteMutation();
  const deleteInstitutionById = async (instId: number) => {
    try {
      await deleteInstitution({ apiUrl: endpoints.Institution, id: instId }).then((res: any) => {
        console.warn('Resss', res);
        if (
          res.error &&
          res?.error?.data &&
          Array.isArray(res?.error?.data?.errors) &&
          res?.error?.data?.errors?.length > 0
        ) {
          toast.error(res.error.data.errors[0]);
        } else {
          toast.success('Institution deleted successfully');
        }
      });
    } catch (error: any) {
      toast.error('Something went wrong please try again later', error.error.data.errors[0]);
    }
  };
  const data: Data[] = gridData?.map((item: Institution) => ({
    instCode: item.instCode,
    instName: item.instName,
    instId: item.instId,
  }));
  const actionBodyTemplate = (rowData: Institution) => {
    return (
      <div className={styles.actionsContainer}>
        <Button label="Edit" onClick={() => onEdit(rowData)} type={'button'} variant="primary" isLoading={false} />
        <Button
          label="Delete"
          onClick={() => deleteInstitutionById(rowData.instId)}
          type={'button'}
          variant="secondary"
          isLoading={false}
        />
      </div>
    );
  };

  return (
    <DataTable value={data} scrollable scrollHeight="500px" paginator rows={5}>
      <Column field="instCode" header="Institution Code" sortable></Column>
      <Column field="instName" header="Institution Name" sortable></Column>
      <Column field="instId" header="Institution ID" sortable></Column>
      <Column body={actionBodyTemplate}></Column>
    </DataTable>
  );
};

export default InstitutionGrid;
