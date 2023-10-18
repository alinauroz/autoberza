/* Project related typedefs */

const projectTypedefs = `
    scalar JSON
    scalar JSONObject

    type Form {
      id: String
      category: String
      fields: JSON
      createdOn: Date
    }

    type Ad {
      id: String
      submittedBy: String
      submittedByUser: User
      isApproved: Boolean
      title: String
      price: String
      discountedPrice: String
      country: String
      city: String
      location: String
      photos: [String]
      details: JSON
    }

    type Query {
      forms: [Form]
      users: [User]
    }
    type Mutation {
      createFieldForm (
        category: String!
        fields: JSON!
      ): Form
      updateFieldForm (
        id: String!
        category: String
        fields: JSON
      ): Form
      deleteFieldForm (
        id: String!
      ): Form

      createAd(
        title: String
        price: String
        discountedPrice: String
        country: String
        city: String
        location: String
        photos: [String]
        details: JSON
      ): Ad
      updateAd(
        id: String!
        title: String
        price: String
        discountedPrice: String
        country: String
        city: String
        location: String
        photos: [String]
        details: JSON
      ): Ad
    }
`;

export default projectTypedefs;
