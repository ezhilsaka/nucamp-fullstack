//import { useState } from "react";
import { Container } from "reactstrap";
//import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from "../features/campsites/CampsitesList";
//import { selectCampsiteById } from "../features/campsites/campsitesSlice";
import SubHeader from "../components/SubHeader";

const CampsiteDirectoryPage = () =>{
    //const [campsiteId, setCampsiteId] = useState(0);
    //const selectedCampsite = selectCampsiteById(campsiteId); 

    return(
        <Container>
            <SubHeader current='Directory' />
            <CampsitesList />
        </Container>
    );

}

export default CampsiteDirectoryPage; 