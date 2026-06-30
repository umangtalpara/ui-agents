#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs-extra');
const path = require('path');

const program = new Command();

program
  .name('ui-agent')
  .description('Autonomous multi-agent UI software development factory CLI')
  .version('1.0.0');

program
  .command('init')
  .description('Bootstrap a new blank project into an agentic UI development workspace')
  .option('-y, --yes', 'Skip dependency installation prompts', false)
  .action((options) => {
    const targetDir = process.cwd();
    const sourceDir = path.join(__dirname, '../lib/templates');

    console.log('\n🚀 Initializing UI Agent workspace...');

    if (!fs.existsSync(sourceDir)) {
      console.error(`❌ Error: Template source directory not found: ${sourceDir}`);
      process.exit(1);
    }

    try {
      // Copy all template files recursively, keeping user documents safe
      fs.copySync(sourceDir, targetDir, {
        overwrite: true,
        errorOnExist: false,
        filter: (src, dest) => {
          const relativePath = path.relative(sourceDir, src).replace(/\\/g, '/');
          const protectedPaths = [
            'doc/prd.md',
            'doc/design.md',
            'doc/how-to-use-ai.md'
          ];
          if (protectedPaths.includes(relativePath) && fs.existsSync(dest)) {
            return false; // Skip overwriting user's active document inputs
          }
          return true;
        }
      });
      console.log('✅ Workspace template files copied successfully.');

      // Initialize project-management files to blank states if they don't exist
      const projectMgmtDir = path.join(targetDir, '.ai/project-management');
      fs.ensureDirSync(projectMgmtDir);
      
      const memoryDir = path.join(targetDir, '.ai/memory');
      fs.ensureDirSync(memoryDir);

      // Create tracking files with base content if they don't exist
      const filesToCreate = {
        '.ai/project-management/project-status.md': '# Project Status\n\nStatus: Awaiting PRD\n',
        '.ai/project-management/progress.md': '# Progress\n\n- [ ] Ingest PRD/Design\n',
        '.ai/project-management/current-phase.md': '# Current Phase\n\nPhase: Planning\n',
        '.ai/project-management/agent-status.md': '# Agent Status\n\n- Super Agent: Idle\n- Design Agent: Idle\n- UI Developer Agent: Idle\n- Responsive QA Agent: Idle\n- Code Review Agent: Idle\n',
        '.ai/memory/decisions.md': '# Architectural & Design Decisions\n\nNo decisions recorded yet.\n',
        '.ai/memory/blockers.md': '# Active Blockers\n\nNo active blockers.\n',
      };

      for (const [relPath, content] of Object.entries(filesToCreate)) {
        const fullPath = path.join(targetDir, relPath);
        if (!fs.existsSync(fullPath)) {
          fs.writeFileSync(fullPath, content, 'utf8');
        }
      }

      // Update package.json
      const pkgPath = path.join(targetDir, 'package.json');
      let pkg = {};
      if (fs.existsSync(pkgPath)) {
        pkg = fs.readJsonSync(pkgPath);
      }

      // Merge dependencies
      pkg.dependencies = pkg.dependencies || {};
      pkg.devDependencies = pkg.devDependencies || {};

      const depsToInject = {
        'clsx': '^2.1.1',
        'tailwind-merge': '^2.3.0',
        'lucide-react': '^0.395.0',
        'framer-motion': '^11.2.10',
      };

      const devDepsToInject = {
        'tailwindcss': '^3.4.4',
        'postcss': '^8.4.38',
        'autoprefixer': '^10.4.19',
      };

      let updated = false;
      for (const [dep, ver] of Object.entries(depsToInject)) {
        if (!pkg.dependencies[dep]) {
          pkg.dependencies[dep] = ver;
          updated = true;
        }
      }

      for (const [dep, ver] of Object.entries(devDepsToInject)) {
        if (!pkg.devDependencies[dep] && !pkg.dependencies[dep]) {
          pkg.devDependencies[dep] = ver;
          updated = true;
        }
      }

      // Detect package manager lockfile
      let pmInstallCmd = 'npm install';
      if (fs.existsSync(path.join(targetDir, 'pnpm-lock.yaml'))) {
        pmInstallCmd = 'pnpm install';
      } else if (fs.existsSync(path.join(targetDir, 'yarn.lock'))) {
        pmInstallCmd = 'yarn install';
      } else if (fs.existsSync(path.join(targetDir, 'bun.lockb'))) {
        pmInstallCmd = 'bun install';
      }

      if (updated) {
        fs.writeJsonSync(pkgPath, pkg, { spaces: 2 });
        console.log('✅ Updated package.json with UI dependencies (Tailwind CSS, Framer Motion, lucide-react, clsx, tailwind-merge).');
        console.log(`\n💡 Please run \`${pmInstallCmd}\` to install the dependencies.`);
      } else {
        console.log('✅ package.json already has required dependencies.');
      }

      // Initialize or append .gitignore
      const gitignorePath = path.join(targetDir, '.gitignore');
      const standardIgnores = [
        'node_modules',
        '.next',
        'dist',
        'build',
        '.env',
        '.env.local',
        '.env.development.local',
        '.env.test.local',
        '.env.production.local',
        '.DS_Store'
      ];
      if (!fs.existsSync(gitignorePath)) {
        fs.writeFileSync(gitignorePath, standardIgnores.join('\n') + '\n', 'utf8');
        console.log('✅ Created default .gitignore.');
      } else {
        let content = fs.readFileSync(gitignorePath, 'utf8');
        let lines = content.split('\n').map(l => l.trim());
        let toAppend = [];
        for (const item of standardIgnores) {
          if (!lines.includes(item)) {
            toAppend.push(item);
          }
        }
        if (toAppend.length > 0) {
          fs.appendFileSync(gitignorePath, '\n# UI Agent ignores\n' + toAppend.join('\n') + '\n', 'utf8');
          console.log('✅ Appended standard ignores to existing .gitignore.');
        }
      }

      console.log('\n🎉 UI Agent workspace has been initialized successfully!');
      console.log('👉 Fill in your product requirements or Figma mockups in doc/prd.md or doc/design.md.');
      console.log('👉 Open this folder in your AI IDE (Gemini, Claude, Cursor) to start the autonomous UI build loop!\n');

    } catch (err) {
      console.error('❌ Error copying templates or initializing workspace:', err);
      process.exit(1);
    }
  });

program
  .command('status')
  .description('Show the status and progress of the UI agent')
  .action(() => {
    const targetDir = process.cwd();
    const statusPath = path.join(targetDir, '.ai/project-management/project-status.md');
    const progressPath = path.join(targetDir, '.ai/project-management/progress.md');

    if (!fs.existsSync(statusPath)) {
      console.log('❌ UI Agent workspace has not been initialized. Run `ui-agent init` first.');
      process.exit(1);
    }

    console.log('\n📊 --- UI AGENT STATUS ---');
    console.log(fs.readFileSync(statusPath, 'utf8').trim());
    console.log('\n📝 --- RECENT PROGRESS ---');
    if (fs.existsSync(progressPath)) {
      console.log(fs.readFileSync(progressPath, 'utf8').trim());
    } else {
      console.log('No progress logged yet.');
    }
    console.log();
  });

program
  .command('validate')
  .description('Validate the generated UI project for responsive and standard requirements')
  .action(() => {
    const targetDir = process.cwd();
    console.log('\n🔍 Starting UI Agent project validation...');
    
    let issues = [];
    let warnings = [];

    // Check if codebase exists
    const codebaseExists = fs.existsSync(path.join(targetDir, 'codebase')) || fs.existsSync(path.join(targetDir, 'src'));
    if (!codebaseExists) {
      warnings.push('No codebase/ or src/ folder found yet. UI build may not have started.');
    }

    // Check package.json dependencies
    const pkgPath = path.join(targetDir, 'package.json');
    if (fs.existsSync(pkgPath)) {
      const pkg = fs.readJsonSync(pkgPath);
      const hasTailwind = (pkg.dependencies && pkg.dependencies.tailwindcss) || (pkg.devDependencies && pkg.devDependencies.tailwindcss);
      if (!hasTailwind) {
        warnings.push('Tailwind CSS is not found in package.json dependencies. Make sure it is installed.');
      }
    } else {
      issues.push('package.json not found in the root directory.');
    }

    // Scan for HTML/JSX/TSX files and check viewport/responsive tags
    let files = [];
    const scanDir = (dir) => {
      if (!fs.existsSync(dir)) return;
      const list = fs.readdirSync(dir);
      for (const file of list) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          if (file !== 'node_modules' && file !== '.git' && file !== '.next') {
            scanDir(fullPath);
          }
        } else if (/\.(html|jsx|tsx|vue|css)$/.test(file)) {
          files.push(fullPath);
        }
      }
    };

    scanDir(targetDir);

    if (files.length > 0) {
      console.log(`Checking ${files.length} UI source file(s) for responsive markup and CSS standard rules...`);
      let viewportChecked = false;

      for (const file of files) {
        const content = fs.readFileSync(file, 'utf8');
        const filename = path.basename(file);

        // Check for viewport meta tag in HTML files
        if (file.endsWith('.html')) {
          if (content.includes('viewport') && content.includes('width=device-width')) {
            viewportChecked = true;
          }
        }

        // Check for Tailwind responsive prefixes (sm:, md:, lg:, xl:, max-sm:, max-md:)
        const hasResponsiveClasses = /(sm:|md:|lg:|xl:|max-sm:|max-md:)/.test(content);
        if (!hasResponsiveClasses && /\.(jsx|tsx|html)$/.test(file)) {
          warnings.push(`File [${filename}] does not contain any Tailwind responsive prefixes (sm:, md:, lg:, etc.). Ensure it scales correctly.`);
        }

        // Check for interactive button/anchor tap target sizing
        if (/\.(jsx|tsx|html)$/.test(file)) {
          const hasInteractiveElement = /<button|<a\s|onClick/i.test(content);
          if (hasInteractiveElement) {
            // Check if it has sizing/padding indicators (p-, py-, px-, h-, w-, min-h-, btn)
            const hasSizingClasses = /(p-\d+|py-\d+|px-\d+|h-\d+|w-\d+|min-h-|btn|className={|className=)/i.test(content);
            if (!hasSizingClasses) {
              warnings.push(`File [${filename}] has interactive tags (button/link) but appears to lack standard styling or touch boundaries. Verify tap targets are >= 48px.`);
            }
          }
        }

        // Check for placeholder text
        if (/TODO|placeholder|lorem ipsum/i.test(content)) {
          warnings.push(`File [${filename}] contains placeholders or TODO comments.`);
        }
      }

      if (!viewportChecked && files.some(f => f.endsWith('.html'))) {
        warnings.push('No <meta name="viewport" content="width=device-width..."> tag found in HTML file(s). Responsive layouts require this.');
      }
    } else {
      warnings.push('No UI source files (.html, .jsx, .tsx, .vue) found.');
    }

    if (issues.length === 0 && warnings.length === 0) {
      console.log('\n🟢 Validation Completed: UI project looks clean and meets standards! No issues found.');
    } else {
      if (issues.length > 0) {
        console.log('\n🔴 Errors Found:');
        issues.forEach(issue => console.log(` - ${issue}`));
      }
      if (warnings.length > 0) {
        console.log('\n🟡 Warnings / Recommendations:');
        warnings.forEach(warn => console.log(` - ${warn}`));
      }
      console.log('\n💡 Tip: Update files or check styling rules in .ai/context/ui-guidelines.md to fix warnings.');
    }
    console.log();
  });

program.parse(process.argv);
