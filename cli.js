#!/usr/bin/env node

const { program } = require('commander');
const fs = require('fs-extra');
const path = require('path');

// Set version and description for your CLI
program
  .version('1.0.0')
  .description('CLI tool for scaffolding and adding components from @ft4bhi/ui');

// Command: init – Scaffold a new UI project
program
  .command('init')
  .description('Initialize a new UI project using @ft4bhi/ui templates')
  .action(() => {
    console.log('Initializing new project...');

    // Define source paths
    const templateDir = path.join(__dirname, 'templates', 'project');
    const libDir = path.join(__dirname, 'templates', 'lib'); // Path to lib folder
    const destDir = process.cwd(); // The directory where the user runs the command
    const destLibDir = path.join(destDir, 'src', 'lib'); // lib should be inside src

    // Copy project template
    fs.copy(templateDir, destDir)
      .then(() => {
        console.log('Project initialized successfully!');
        // Copy lib folder separately if it exists
        return fs.existsSync(libDir) ? fs.copy(libDir, destLibDir) : Promise.resolve();
      })
      .then(() => console.log('Lib folder copied successfully inside src/!'))
      .catch(err => {
        console.error('Error during initialization:', err);
        process.exit(1);
      });
  });

// Command: add – Add a specific component to an existing project
program
  .command('add <component>')
  .description('Add a new UI component (e.g., button, card) to your project')
  .action((component) => {
    console.log(`Adding ${component} component...`);

    // Define source paths
    const componentTemplateDir = path.join(__dirname, 'templates', 'components', component);
    const libDir = path.join(__dirname, 'templates', 'lib'); // Path to lib folder
    if (!fs.existsSync(componentTemplateDir)) {
      console.error(`Component template for "${component}" not found.`);
      process.exit(1);
    }

    // Define destination paths
    const destComponentDir = path.join(process.cwd(), 'src', 'components', component);
    const destLibDir = path.join(process.cwd(), 'src', 'lib'); // lib should be inside src

    // Copy component
    fs.copy(componentTemplateDir, destComponentDir)
      .then(() => {
        console.log(`${component} component added successfully!`);
        // Copy lib folder separately if it exists
        return fs.existsSync(libDir) ? fs.copy(libDir, destLibDir) : Promise.resolve();
      })
      .then(() => console.log('Lib folder copied successfully inside src/!'))
      .catch(err => {
        console.error(`Error adding component ${component}:`, err);
        process.exit(1);
      });
  });

// Parse command-line arguments
program.parse(process.argv);
