const fs = require('fs');

async function run() {
  try {
    const version = process.env.INPUT_VERSION;

    // Read Docker Compose file
    let dockerComposePath = './docker-compose-prod.yml';
    let dockerComposeContent = fs.readFileSync(dockerComposePath, 'utf8');

    // Replace image tag with the latest version
    dockerComposeContent = dockerComposeContent.replace(/image: public\.ecr\.aws\/diggas\/blog:v\d+\.\d+\.\d+/g, `image: public.ecr.aws/diggas/blog:${version}`);

    // Write back to the Docker Compose file
    fs.writeFileSync(dockerComposePath, dockerComposeContent);

    console.log(`Docker Compose file updated with version ${version}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

run();
