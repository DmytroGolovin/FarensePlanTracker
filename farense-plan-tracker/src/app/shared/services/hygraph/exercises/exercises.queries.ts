import {gql} from 'apollo-angular'

const GET_EXERCISES = gql`
  query {
    exercises (stage: DRAFT) {
      id
      name
      description
    }
  }
`;

const ADD_EXERCISE = gql`
  mutation addExercise($name: String!, $description: String!) {
    addExercise(name: $name, description: $description) {
      id
      name
      description
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
