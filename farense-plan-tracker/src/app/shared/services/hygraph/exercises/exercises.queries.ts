import {gql} from 'apollo-angular'

const GET_EXERCISES = gql`
  query {
    exercises (stage: DRAFT) {
      id
      name
      note
      sets
      reps
      restTime
      videoUrl
    }
  }
`;

const GET_WORKOUT_EXERCISES = gql`
query getWorkoutExercises($workoutId: ID!){
  workout (
    stage: DRAFT
    where: {id: $workoutId }
  ) {
    workoutExercises{
      name
      note
      sets
      reps
      restTime
      videoUrl
    }
  }
}
`;

const ADD_EXERCISE = gql`
  mutation addExercise($name: String!, $note: String!) {
    addExercise(name: $name, note: $note) {
      id
      name
      note
    }
  }
`;

const DELETE_EXERCISE = gql`
  mutation deleteExercise($id: Int!) {
    deleteExercise(id: $id) {
      id
    }
  }
`;

export {GET_EXERCISES, GET_WORKOUT_EXERCISES, ADD_EXERCISE, DELETE_EXERCISE}
