import React from 'react'

export const IndividualData = ({individualExcelData}) => {
    return (
        <>
            <th>{individualExcelData.ID}</th>
            <th>{individualExcelData.ID_TICKET}</th>
            <th>{individualExcelData.Ticket}</th>
            <th>{individualExcelData.Dates}</th>
            <th>{individualExcelData.Heure}</th>
            <th>{individualExcelData.Code}</th>
            <th>{individualExcelData.Article}</th>
            <th>{individualExcelData.Famille}</th>
            <th>{individualExcelData.PRIX_A}</th>
            <th>{individualExcelData.PRIX_MP}</th>
            <th>{individualExcelData.PRIX_V}</th>
            <th>{individualExcelData.FALSE}</th>
            <th>{individualExcelData.Remise}</th>
            <th>{individualExcelData.TAUX_TVA}</th>
            <th>{individualExcelData.Caissier}</th>
            <th>{individualExcelData.Vendeur}</th>
            <th>{individualExcelData.CODE_CLIENT}</th>
            <th>{individualExcelData.CLIENT}</th>
            <th>{individualExcelData.POSTE}</th>
            <th>{individualExcelData.OPERATION}</th>
            <th>{individualExcelData.CLOTURE_CAISSIER}</th>
            <th>{individualExcelData.CLOTURE_GLOBALE}</th>
            <th>{individualExcelData.NOTES}</th>
        </>
    )
}
