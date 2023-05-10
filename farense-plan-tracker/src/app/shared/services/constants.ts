export abstract class Constants {
  public static apiRoutes = {
    home: 'api',
    clients: {
      root: 'clients'
    },
    exercises: {
      root: 'exercises',
      storagePath: 'exercises/'
    },
    plans: {
      root: 'plans',
    },
    workouts: {
      root: 'workouts',
    }
  }

  public static clientRoutes = {
    home: '',
    screens: {
      root: 'app',
    },
    dashboard: {
      root: 'app/dashboard'
    },
    workout: {
      root: 'app/workout'
    },
    exercise: {
      root: 'app/exercise'
    },
    nutrition: {
      root: 'app/nutrition'
    },
    plan: {
      root: 'app/plan',
      overview: 'app/plan/overview',
      workouts: 'app/plan/workouts'
    },
    weight: {
      root: 'app/weight'
    },
    settings: {
      root: 'app/settings'
    },
    notifications: {
      root: 'app/notifications'
    },
  }
}
