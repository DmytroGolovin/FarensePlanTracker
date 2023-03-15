import {gql} from 'apollo-angular'

const GET_CLIENT_PLAN = gql`
query getClientByEmail($userId: ID!){
  client (
    stage: DRAFT
    where: { id: $userId }
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

export { }
