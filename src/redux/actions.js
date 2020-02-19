const INCRIMENT = "INCRIMENT";
const DECRIMENT = "DECRIMENT";

export const incrimentCount = () => ({
    type: INCRIMENT
})

export const decrimentCount = () => ({
    type: DECRIMENT
})