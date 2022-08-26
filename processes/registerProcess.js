import camundaClient from '../plugins/camundaClient.js'

camundaClient.subscribe('create-new-user', async ({ task, taskService }) => {
  console.log('TASK: create-new-user')

  const payload = {
    name: task.variables.get('name'),
    email: task.variables.get('email'),
    password: task.variables.get('password'),
  }

  await taskService.complete(task)
})

camundaClient.subscribe('send-email', async ({ task, taskService }) => {
  console.log('TASK: send-email')

  const email = task.variables.get('email')

  if (email) {
    await taskService.complete(task)
  } else {
    await taskService.handleFailure(task, {
      errorMessage: 'Invalid email address.',
      retries: 1,
      retryTimeout: 1000,
    })
  }
})
