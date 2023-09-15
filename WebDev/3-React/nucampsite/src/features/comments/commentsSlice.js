import { COMMENTS } from '../../app/shared/COMMENTS';

export const selectCommentsByCampsiteID = (campsiteId) => {
    return COMMENTS.filter((comment) => comment.campsiteId === parseInt(campsiteId)); 
};