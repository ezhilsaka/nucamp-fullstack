import { PROMOTIONS } from "../../app/shared/PROMOTIONS";

export const selectFeaturePromotion = () => {
    return PROMOTIONS.find((promotion) => promotion.featured); 
}
