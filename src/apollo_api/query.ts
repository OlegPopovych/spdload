import { gql } from '../__generated__';

export const GET_TOURS = gql(/* GraphQL */ `
	query GetTours($toursLimit: Int) {
		launches(limit: $toursLimit) {
			id
			mission_name
			details
		}
	}
`);