import {gql} from 'apollo-angular'

const GET_CLIENT_BY_EMAIL = gql`
query getPlanByUser($userEmail: String!){
  client (
    stage: DRAFT
    where: { email: $userEmail }
  ) {
    name
    plan {
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
