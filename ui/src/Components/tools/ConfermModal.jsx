export default function ConfermModal() {
    return (
        <div className="modal  bgs" id="UserDelete">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header bg-primary">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">New Messages</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div className="modal-body bg-secondary">
                        <a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="mr-3">
                                <div className="icon-circle bg-primary">
                                    <i className="fas fa-file-alt text-white"></i>
                                </div>
                            </div>
                            <div>
                                <div className="small text-gray-500">December 12, 2019</div>
                                <span className="font-weight-bold">A new monthly report is ready to
                                    download!</span>
                            </div>
                        </a>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Show all messages</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
