import { Col, Row } from "reactstrap";
//import DisplayCard from './DisplayCard';
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import { selectFeatureCampsite } from "../campsites/campsitesSlice";
import { selectFeaturePromotion } from "../promotions/promotionsSlice";
import { selectFeaturedPartner } from "../partners/partnersSlice";

const DisplayList = () => {
    const items = [selectFeatureCampsite(), selectFeaturePromotion(), selectFeaturedPartner()];

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    <Col md className="m-1" key={idx}>
                        <AnimatedDisplayCard item={item} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default DisplayList;