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
    nutrition: {
      root: 'app/nutrition'
    },
    settings: {
      root: 'app/settings'
    },
    notifications: {
      root: 'app/notifications'
    },
  }
}
