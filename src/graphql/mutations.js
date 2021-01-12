/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAccomodation = /* GraphQL */ `
  mutation CreateAccomodation(
    $input: CreateAccomodationInput!
    $condition: ModelAccomodationConditionInput
  ) {
    createAccomodation(input: $input, condition: $condition) {
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
export const updateAccomodation = /* GraphQL */ `
  mutation UpdateAccomodation(
    $input: UpdateAccomodationInput!
    $condition: ModelAccomodationConditionInput
  ) {
    updateAccomodation(input: $input, condition: $condition) {
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
export const deleteAccomodation = /* GraphQL */ `
  mutation DeleteAccomodation(
    $input: DeleteAccomodationInput!
    $condition: ModelAccomodationConditionInput
  ) {
    deleteAccomodation(input: $input, condition: $condition) {
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
