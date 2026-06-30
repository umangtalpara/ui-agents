const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

console.log('🧪 Starting integration tests for @umangtalpara/ui-agent...');

const sandboxDir = path.join(__dirname, 'test-sandbox');

try {
  // 1. Clean and setup sandbox
  if (fs.existsSync(sandboxDir)) {
    fs.removeSync(sandboxDir);
  }
  fs.ensureDirSync(sandboxDir);

  // 2. Initialize a blank package.json in sandbox
  const initialPkg = {
    name: 'test-project',
    version: '1.0.0',
    dependencies: {},
    devDependencies: {}
  };
  fs.writeJsonSync(path.join(sandboxDir, 'package.json'), initialPkg, { spaces: 2 });

  // 3. Execute the CLI init command
  // Cwd of command is the sandboxDir
  const cliPath = path.join(__dirname, 'bin/cli.js');
  console.log(`Running: node "${cliPath}" init in sandbox...`);
  execSync(`node "${cliPath}" init`, { cwd: sandboxDir, stdio: 'inherit' });

  // 4. Assertions on generated files
  const expectedFiles = [
    'AGENTS.md',
    'CLAUDE.md',
    'GEMINI.md',
    'README.md',
    'doc/prd.md',
    'doc/design.md',
    'doc/how-to-use-ai.md',
    'doc/assets/.gitkeep',
    '.ai/settings.json',
    '.ai/context/ui-guidelines.md',
    '.ai/context/coding-rules.md',
    '.ai/context/architecture-rules.md',
    '.ai/context/naming-rules.md',
    '.ai/context/tech-stack.md',
    '.ai/context/project-context.md',
    '.ai/agents/super-agent.md',
    '.ai/agents/design-agent.md',
    '.ai/agents/ui-developer-agent.md',
    '.ai/agents/responsive-qa-agent.md',
    '.ai/agents/code-review-agent.md',
    '.ai/workflows/design-to-prd.md',
    '.ai/workflows/prd-to-ui-plan.md',
    '.ai/workflows/ui-generation.md',
    '.ai/workflows/responsive-a11y-check.md',
    '.ai/workflows/final-review.md',
    '.ai/skills/uiux.md',
    '.ai/skills/frontend.md',
    '.ai/skills/testing.md',
    '.ai/skills/code-review.md',
    '.ai/project-management/project-status.md',
    '.ai/project-management/progress.md',
    '.ai/project-management/current-phase.md',
    '.ai/project-management/agent-status.md',
    '.ai/memory/decisions.md',
    '.ai/memory/blockers.md',
    '.agents/rules/ui-guidelines.md',
    '.agents/rules/coding-rules.md',
    '.agents/skills/uiux/SKILL.md',
    '.agents/workflows/ui-generation.md',
    '.cursor/rules/core.mdc',
    '.cursor/rules/ui-rules.mdc',
    '.cursor/rules/coding-rules.mdc',
    '.claude/skills/uiux/SKILL.md'
  ];

  console.log('\n🔍 Verifying generated files...');
  for (const file of expectedFiles) {
    const filePath = path.join(sandboxDir, file);
    if (!fs.existsSync(filePath)) {
      throw new Error(`Assertion failed: File not found -> ${file}`);
    }
    console.log(`  ✓ ${file} exists.`);
  }

  // 5. Assertions on package.json updates
  console.log('\n🔍 Verifying package.json modifications...');
  const updatedPkg = fs.readJsonSync(path.join(sandboxDir, 'package.json'));

  const expectedDeps = ['clsx', 'tailwind-merge', 'lucide-react', 'framer-motion'];
  const expectedDevDeps = ['tailwindcss', 'postcss', 'autoprefixer'];

  for (const dep of expectedDeps) {
    if (!updatedPkg.dependencies[dep]) {
      throw new Error(`Assertion failed: Dependency '${dep}' not found in package.json.`);
    }
    console.log(`  ✓ Dependency '${dep}' is present: ${updatedPkg.dependencies[dep]}`);
  }

  for (const dep of expectedDevDeps) {
    if (!updatedPkg.devDependencies[dep]) {
      throw new Error(`Assertion failed: DevDependency '${dep}' not found in package.json.`);
    }
    console.log(`  ✓ DevDependency '${dep}' is present: ${updatedPkg.devDependencies[dep]}`);
  }

  // 6. Test status and validate commands
  console.log('\n🧪 Testing Status Command...');
  execSync(`node "${cliPath}" status`, { cwd: sandboxDir, stdio: 'inherit' });

  console.log('\n🧪 Testing Validate Command...');
  execSync(`node "${cliPath}" validate`, { cwd: sandboxDir, stdio: 'inherit' });

  console.log('\n🎉 All integration tests passed successfully!');

  // Cleanup sandbox
  fs.removeSync(sandboxDir);
  console.log('🧹 Cleaned up sandbox directory.\n');

} catch (err) {
  console.error('\n❌ Test execution failed:', err.message);
  // Try to cleanup sandbox
  try {
    fs.removeSync(sandboxDir);
  } catch (cleanupErr) {
    // Ignore cleanup error
  }
  process.exit(1);
}
