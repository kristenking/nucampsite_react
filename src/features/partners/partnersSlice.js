import { PARTNERS } from '../../app/shared/PARTNERS';

export const selectAllPartners = () => {
    return PARTNERS;

}
export const selectFeateredPartner = () => {
    return PARTNERS.find((partner) => partner.featured);

}

