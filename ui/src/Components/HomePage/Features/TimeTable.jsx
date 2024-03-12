import React from 'react';

const TimeTable = ({ featureBgColor, featureTextColor }) => (
    <div className="col-md-6 my-1 p-0 px-1">
        <div className="card cardBoxShadow border-0" style={{ background: featureBgColor, color: featureTextColor }}>
            <div className="card-header h4 text-white text-uppercase text-start" style={{ background: 'var(--cardHeadColor)' }}>
                <div data-aos="fade-right"><i className="fa fa-line-chart text-warning"></i> Opening hours</div>
            </div>
            <div className="card-body cardBoxShadow" id="FeaturesTableColor">
                <table className="table table-bordered border-info table-hover border-opacity-50">
                    <tbody className="fw-normal" style={{ textAlign: 'start' }}>
                        {days.map((day) => (
                            <TableRow key={day} day={day} time={day === 'Sunday' ? 'Closed' : '07am - 07pm'} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);

const TableRow = ({ day, time }) => (
    <tr>
        <td className="transparentTableData">{day} :</td>
        <td className="transparentTableData">{day === 'Sunday' ? <strong style={{color:'orangered'}}>{time}</strong> : time}</td>
    </tr>
);

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default TimeTable;
