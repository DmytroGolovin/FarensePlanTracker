import {gql} from 'apollo-angular'

const GET_WORKOUTS = gql`
  query {
    exercises (stage: DRAFT) {
      id
      name
      description
    }
  }
`;

const GET_WORKOUT_EXERCISES_BY_ID = gql`
query getWorkoutExercisesById($workoutId: ID!){
  workout (
    stage: DRAFT
    where: {id: $workoutId }
  ) {
    title
    workoutExercises {
      id
      sets
      reps
      restTime
      isSuperSet
      exercise {
        name
      }
    }
  }
}
`;

const GET_USER_WORKOUTS = gql`
query getUserWorkouts($clientId: String!){
  workouts (
    stage: DRAFT
    where: {
      clients_some: { clientId: $clientId }
    }
  ) {
    id
    title
    description
    weekDay
  }
}`;

const GET_USER_WORKOUTS_BY_WEEK_DAY = gql`
query getUserWorkoutsByDay($clientEmail: String!, $weekDay: WeekDays!){
  workouts (
    stage: DRAFT
    where: {
      clients_some: { email: $clientEmail }
      weekDay: $weekDay
    })
  {
    id
    title
    weekDay
  }
}`;

const ADD_WORKOUT = gql`
  mutation addExercise($name: String!, $description: String!) {
    addExercise(name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

const DELETE_WORKOUT = gql`
  mutation deleteExercise($id: Int!) {
    deleteExercise(id: $id) {
      id
    }
  }
`;

export {GET_WORKOUT_EXERCISES_BY_ID}
