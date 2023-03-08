import {gql} from 'apollo-angular'

const GET_PLAN_BY_USER = gql`
query getPlanByUser($clientEmail: String!){
  client (
    stage: DRAFT
    where: { email: $clientEmail }
  ) {
    plan {
      id
      workouts {
        id
        weekDay
        workout {
          title
        }
      }
    }
  }
}`;

export { GET_PLAN_BY_USER }
