import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const selectAllCampsites = () => {
    return CAMPSITES;
};

// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)]; 
// };

export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === parseInt(id)); 
    console.log("inside slice function");
}

export const selectFeatureCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured);
}