import { Col, Row } from "reactstrap";
import DisplayCard from './DisplayCard';
import { selectFeatureCampsite } from "../campsites/campsitesSlice";
import { selectFeaturePromotion } from "../promotions/promotionsSlice";

const DisplayList = () => {
    const items = [selectFeatureCampsite(), selectFeaturePromotion()];

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    <Col md className="m-1" key={idx}>
                        <DisplayCard item={item} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default DisplayList;