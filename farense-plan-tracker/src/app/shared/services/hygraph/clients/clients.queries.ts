import {gql} from 'apollo-angular'

const GET_CLIENT_BY_EMAIL = gql`
query getClientByEmail($userEmail: String!){
  client (
    stage: DRAFT
    where: { email: $userEmail }
  ) {
    name
    plan {
      name
      description
      objectives
      videoUrl
      workouts {
        weekDay
        workout {
          id
          title
        }
      }
    }
  }
}`;

export { GET_CLIENT_BY_EMAIL }
