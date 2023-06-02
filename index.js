const core = require('@actions/core');
const fetch = require('node-fetch');

const run = async () => {
  try {
    const url = core.getInput('url');
    const headers = core.getInput('headers');
    const json = core.getInput('json');

    const response = await fetch(url, {
      headers: JSON.parse(headers),
      method: 'POST',
      body: JSON.stringify(JSON.parse(json)),
    });

    if (!response.ok) {
      core.setFailed(`HTTP error: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    core.setFailed(error.message);
  }

}

run();

