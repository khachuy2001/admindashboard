import { Card, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, faMoneyBillTrendUp, faPersonThroughWindow, faUsersLine } from "@fortawesome/free-solid-svg-icons";

const ActivityComp = () => {
    return (
        <>
            <Card>
                <CardBody>
                    <CardTitle className="mb-5">Activity</CardTitle>
                    <ul className="verti-timeline list-unstyled">
                        <li className="event-list">
                            <div className="event-timeline-icon">
                                <FontAwesomeIcon icon={fa1} style={{ color: '#3258F2' }} />
                            </div>
                            <div className="flex-shrink-0 d-flex">
                                <div className="me-3">
                                    <h5 className="font-size-14">
                                        1 Jan{" "}
                                    </h5>
                                </div>
                                <div className="flex-grow-1">
                                    <div>Release of an Alpha Version</div>
                                </div>
                            </div>
                        </li>

                        <li className="event-list">
                            <div className="event-timeline-icon">
                                <FontAwesomeIcon icon={faUsersLine} style={{ color: '#F2545B' }} />
                            </div>
                            <div className="d-flex">
                                <div className="flex-shrink-0 me-3">
                                    <h5 className="font-size-14">
                                        13 Feb{" "}
                                    </h5>
                                </div>
                                <div className="flex-grow-1">
                                    <div>
                                        Bug fixes and Beta release to a small group of users for testing... <Link to="#">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="event-list active">
                            <div className="event-timeline-icon">
                                <FontAwesomeIcon icon={faMoneyBillTrendUp} style={{ color: '#A93F55' }} />
                            </div>
                            <div className="flex-shrink-0 d-flex">
                                <div className="me-3">
                                    <h5 className="font-size-14">
                                        20 March{" "}
                                        <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2" />
                                    </h5>
                                </div>
                                <div className="flex-grow-1">
                                    <div>Pre-seed funding is complete</div>
                                </div>
                            </div>
                        </li>
                        <li className="event-list active">
                            <div className="event-timeline-icon">
                                <FontAwesomeIcon icon={faPersonThroughWindow} style={{ color: '#00A9A5' }} />
                            </div>
                            <div className="flex-shrink-0 d-flex">
                                <div className="me-3">
                                    <h5 className="font-size-14">
                                        12 May{" "}
                                    </h5>
                                </div>
                                <div className="flex-grow-1">
                                    <div>Product market fit found</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="text-center mt-4">
                        <Link
                            to=""
                            className="btn btn-primary  btn-sm"
                        >
                            View More <i className="mdi mdi-arrow-right ms-1" />
                        </Link>
                    </div>
                </CardBody>
            </Card>
        </>
    );
};

export default ActivityComp;