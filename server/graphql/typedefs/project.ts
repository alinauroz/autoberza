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
      price: Int
      discountedPrice: Int
      country: String
      city: String
      location: String
      photos: [String]
      details: JSON
      createdOn: Date
    }

    type Query {
      forms: [Form]
      users: [User]
      ads(
        dateAfter: Int
        isApproved: Boolean
        id: String
      ): [Ad]
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
        price: Int
        discountedPrice: Int
        country: String
        city: String
        location: String
        photos: [String]
        details: JSON
      ): Ad
      updateAd(
        id: String!
        title: String
        price: Int
        discountedPrice: Int
        country: String
        city: String
        location: String
        photos: [String]
        details: JSON
        isApproved: Boolean
      ): Ad
    }
`;

export default projectTypedefs;
