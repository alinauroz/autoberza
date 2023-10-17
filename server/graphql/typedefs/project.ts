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
    }
`;

export default projectTypedefs;
