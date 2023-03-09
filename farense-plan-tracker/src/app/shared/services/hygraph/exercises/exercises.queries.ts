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
    title
    exercises {
      sets
      reps
      restTime
      exercise {
        name
      }
    }
  }
}
`;

const GET_WORKOUT_EXERCISE_BY_ID = gql`
query getWorkoutExercises($exerciseId: ID!){
  workoutExercise (
    stage: DRAFT
    where: {id: $exerciseId }
  ) {
    name
    sets
    reps
    restTime
    notes
    exercise {
      name
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

export { GET_WORKOUT_EXERCISES, GET_WORKOUT_EXERCISE_BY_ID}
