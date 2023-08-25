import { Card } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const AdComp = () => {
    return (
        <Card>
            <div className="ad-container position-relative h-100 p-4">
                <span className="image-cover"></span>
                <div className="d-flex flex-column flex-auto position-relative">
                    <h5 className="pt-2 text-font-bold text-white">Build Future with Us</h5>
                    <p className="text-white">
                        Dont miss the opportunity of working on the cutting-edge technology and the most futuristics projects
                    </p>
                    <a className="mt-auto mb-0 text-white">
                        Read More
                        <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                    </a>
                </div>
            </div>
        </Card>
    )
}

export default AdComp;