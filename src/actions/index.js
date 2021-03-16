export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const removeFeature = deleteFeature => {
    return { type: REMOVE_FEATURE, payload: (deleteFeature - 1)};
}

export const addFeature = newFeature => {
    return { type: ADD_FEATURE, payload: (newFeature - 1)};
}