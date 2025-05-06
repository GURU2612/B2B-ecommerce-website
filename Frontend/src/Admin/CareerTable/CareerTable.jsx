import React from 'react';
import './CareerTable.css';

const GenericTable = ({ title, subtitle, data, columns }) => {
    return (
        <div className="career-container">
            {title && <h1 className="career-title">{title}</h1>}
            {subtitle && <p className="career-subtitle">{subtitle}</p>}

            <div style={{ overflowX: 'auto' }}>
                <table className="career-table">
                    <thead>
                    <tr>
                        {columns.map((col) => (
                            <th key={col.header}>{col.header}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={row.id || rowIndex}>
                            {columns.map((col, colIndex) => (
                                <td key={colIndex}>
                                    {col.render ? col.render(row) : row[col.accessor]}
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GenericTable;
