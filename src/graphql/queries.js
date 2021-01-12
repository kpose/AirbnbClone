/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAccomodation = /* GraphQL */ `
  query GetAccomodation($id: ID!) {
    getAccomodation(id: $id) {
      id
      image
      type
      title
      description
      bed
      bedroom
      maxGuests
      oldPrice
      newPrice
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const listAccomodations = /* GraphQL */ `
  query ListAccomodations(
    $filter: ModelAccomodationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccomodations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        type
        title
        description
        bed
        bedroom
        maxGuests
        oldPrice
        newPrice
        latitude
        longitude
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
