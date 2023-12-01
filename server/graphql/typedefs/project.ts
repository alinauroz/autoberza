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
      description: String
      location: String
      photos: [String]
      details: JSON
      createdOn: Date
      category: String
      subscriptionPlan: String
      subscriptionEndDate: Date
      isPromoted: Boolean
    }

    type AdResponse {
      data: [Ad],
      count: Int,
      moreExists: Boolean
      min: Int,
      max: Int,
      avg: Int
    }

    type AdFilterResponse {
      filters: JSON
    }

    type Query {
      forms: [Form]
      users(isAdmin: Boolean): [User]
      ads(
        dateAfter: Int
        isApproved: Boolean
        id: String

        minPrice: Int,
        maxPrice: Int,
        city: String,
        country: String,
        category: String,
        categories: [String]

        details: JSON

        take: Int,
        skip: Int

        sortBy: String
        sortOrder: String
      ): AdResponse
      myAds: AdResponse
      adFilters(category: String): AdFilterResponse
      homepageAds: JSON
    }
    type Mutation {
      adminPromotion(adId: String!, noOfDays: Int!): Ad
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
        category: String
        description: String
        manufacturer: String
        model: String
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
        description: String
        category: String
        manufacturer: String
        model: String
      ): Ad
      deleteAd(
        id: String!
      ): Ad
    }
`;

export default projectTypedefs;
