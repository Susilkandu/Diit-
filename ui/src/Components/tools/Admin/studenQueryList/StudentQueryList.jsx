import { useState, useContext } from "react"
import { adminContext } from "../../../../context/admin"
export default function studentQueryList() {
const {allStudent} = useContext(adminContext);
  return (
    <div className="row mx-0 px-0  py-2 bg-white text-primary  myshadow hello123"
											style={{ borderTop: 'var(--my-border)' }}>
											<div
												className="col-12 mx-0  px-2 fw-medium d-flex justify-content-between align-items-center ">
												<div className="d-flex  fw-bolder">
													<p id="All small"> Total Students List</p>
												</div>
												<div>
													<input type="search" name="search" className="border-secondary-subtle border rounded p-1"
														placeholder="Search" id="search" />
												</div>
											</div>
											<table className="table table-responsive table-sm " id="dashBoardTable" style={{ color: 'maroon' }}>
												<thead>
													<tr role="row">
														<th >Photo</th>
														<th>Reg. No</th>
														<th>Name</th>
														<th>Address</th>
														<th>Mobile</th>
														<th>Admission Date</th>
														<th> vvAction</th>
													</tr>
												</thead>
												<tbody>
													{
														(allStudent.length >= 1) && allStudent.map((student) => {
															return (
																<tr role="row" className="odd" id={student._id}>
																	<td><img className="rounded-circle" width="40" src={student.photo} />
																	</td>
																	<td className="fw-medium">05</td>
																	<td className="">{student.name}</td>
																	<td>{student.address}</td>
																	<td>{student.mobileNumber}</td>
																	<td>{student.dob.slice(0, 10)}</td>
																	<td>

																		<button
																			type="button"
																			id="LounchModal"
																			className="btn btn-sm bg-seconday bg-danger text-white"
																			onClick={handleModalShow}
																		>
																			<i class="fa fa-trash-o" aria-hidden="true"></i>
																		</button>
																	</td>
																</tr>
															)
														})
													}
												</tbody>

												<Modal show={showModal} onHide={handleModalClose} animation={false} >
													<Modal.Header className='bg-primary ' closeButton >
														<Modal.Title>
															<div className="h2 fw-bold myFlex2 text-white"><b className="px-2 text-uppercase">   DELETE STUDENT'S</b></div>
														</Modal.Title>
													</Modal.Header>
													<Modal.Body>
														<MyFormComponent />

													</Modal.Body>
													<Modal.Footer>
														<Button variant="secondary" onClick={handleModalClose}>
															Close
														</Button>
														<Button variant="danger" onClick={showNotes}>Delete</Button>
													</Modal.Footer>
												</Modal>



											</table>
										</div>
  )
}
