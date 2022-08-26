import camundaClient from '../plugins/camundaClient.js'

camundaClient.subscribe('after-login', async ({ task, taskService }) => {
  console.log('TASK: after-login')

  const payload = {
    email: task.variables.get('email'),
    password: task.variables.get('password'),
  }

  await taskService.complete(task)
})
