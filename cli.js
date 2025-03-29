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
    
    // Define the path to your project template folder.
    // Create a folder called "templates/project" in your project directory.
    const templateDir = path.join(__dirname, 'templates', 'project');
    const destDir = process.cwd(); // The directory where the user runs the command

    fs.copy(templateDir, destDir)
      .then(() => console.log('Project initialized successfully!'))
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
    
    // Define the mapping to component templates.
    // Create a folder for each component under "templates/components"
    const componentTemplateDir = path.join(__dirname, 'templates', 'components', component);
    if (!fs.existsSync(componentTemplateDir)) {
      console.error(`Component template for "${component}" not found.`);
      process.exit(1);
    }
    
    // Define where the component should be copied.
    // For example, copy to "src/components/<component>" in the user's project
    const destDir = path.join(process.cwd(), 'src', 'components', component);
    
    fs.copy(componentTemplateDir, destDir)
      .then(() => console.log(`${component} component added successfully!`))
      .catch(err => {
        console.error(`Error adding component ${component}:`, err);
        process.exit(1);
      });
  });

// Parse command-line arguments
program.parse(process.argv);
