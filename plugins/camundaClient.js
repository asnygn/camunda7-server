import Camunda from 'camunda-external-task-client-js'

const { Client, BasicAuthInterceptor, logger } = Camunda

const basicAuthentication = new BasicAuthInterceptor({
  username: process.env.CAMUNDA_USERNAME,
  password: process.env.CAMUNDA_PASSWORD,
})

const config = {
  baseUrl: process.env.CAMUNDA_URL,
  interceptors: basicAuthentication,
  use: logger,
}

const camundaClient = new Client(config)

export default camundaClient
