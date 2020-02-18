import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID!
    role: Role
  }

  enum Role {
    DOCTOR
    PATIENT
  }
`;

export default typeDefs;
