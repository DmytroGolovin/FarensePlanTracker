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

export {GET_EXERCISES, ADD_EXERCISE, DELETE_EXERCISE}
