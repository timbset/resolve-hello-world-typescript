const appConfig = {
  routes: 'build/client/routes.js',
  aggregates: [
    {
      name: 'aggregate-name',
      commands: 'build/common/aggregates/aggregate-name.commands.js',
      projection: 'build/common/aggregates/aggregate-name.projection.js'
    }
  ],
  readModels: [
    {
      name: 'read-model-name',
      projection: 'build/common/read-models/read-model-name.projection.js',
      resolvers: 'build/common/read-models/read-model-name.resolvers.js',
      adapterName: 'default'
    }
  ],
  viewModels: [
    {
      name: 'view-model-name',
      projection: 'build/common/view-models/view-model-name.projection.js',
      serializeState: 'build/common/view-models/view-model-name.serialize_state.js',
      deserializeState:
        'build/common/view-models/view-model-name.deserialize_state.js'
    }
  ],
  sagas: [
    {
      name: 'saga-name',
      cronHandlers: 'build/common/sagas/saga-name.cron.js',
      eventHandlers: 'build/common/sagas/saga-name.event.js'
    }
  ],
  redux: {
    reducers: { 'reducer-name': 'build/client/reducers/reducer-name.js' },
    middlewares: ['build/client/middlewares/middleware-name.js']
  }
}

export default appConfig
