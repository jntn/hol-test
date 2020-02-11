export async function hello (event, context, callback) {
  await new Promise((resolve, reject) => setTimeout(resolve, 500))

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event
    })
  }

  callback(null, response)
}

export async function lol (event, context, callback) {
  await new Promise((resolve, reject) => setTimeout(resolve, 500))

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Lool!',
      input: event
    })
  }

  callback(null, response)
}
