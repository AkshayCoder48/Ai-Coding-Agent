import { WebContainer } from '@webcontainer/api';

export const createTools = (webcontainer: WebContainer | null) => {
  return [
    {
      type: "function",
      function: {
        name: "writeFile",
        description: "Write content to a file in the project filesystem.",
        parameters: {
          type: "object",
          properties: {
            path: { type: "string", description: "Path to the file (e.g., 'src/App.jsx')" },
            content: { type: "string", description: "Content to write" }
          },
          required: ["path", "content"]
        }
      }
    },
    {
      type: "function",
      function: {
        name: "runCommand",
        description: "Run a command in the terminal (e.g., 'npm install', 'npm run build').",
        parameters: {
          type: "object",
          properties: {
            command: { type: "string", description: "The command to run" },
            args: { type: "array", items: { type: "string" }, description: "Arguments for the command" }
          },
          required: ["command"]
        }
      }
    },
    {
      type: "function",
      function: {
        name: "readFile",
        description: "Read content from a file in the project filesystem.",
        parameters: {
          type: "object",
          properties: {
            path: { type: "string", description: "Path to the file" }
          },
          required: ["path"]
        }
      }
    },
    {
      type: "function",
      function: {
        name: "listFiles",
        description: "List files in a directory.",
        parameters: {
          type: "object",
          properties: {
            path: { type: "string", description: "Path to the directory" }
          }
        }
      }
    },
    {
      type: "function",
      function: {
        name: "githubPush",
        description: "Create a GitHub repository and push the current code.",
        parameters: {
          type: "object",
          properties: {
            repoName: { type: "string", description: "Name of the new repository" },
            commitMessage: { type: "string", description: "Commit message" }
          },
          required: ["repoName"]
        }
      }
    }
  ];
};

export const executeTool = async (
  name: string,
  args: any,
  webcontainer: WebContainer | null,
  onOutput?: (data: string) => void
) => {
  if (!webcontainer) throw new Error('WebContainer not initialized');

  switch (name) {
    case 'writeFile': {
      const { path, content } = args;
      const parts = path.split('/');
      if (parts.length > 1) {
        const dir = parts.slice(0, -1).join('/');
        await webcontainer.fs.mkdir(dir, { recursive: true });
      }
      await webcontainer.fs.writeFile(path, content);

      // Notify terminal about file write
      onOutput?.(`\r\n\x1b[34m[OnyxGPT]\x1b[0m Writing file: ${path}...\r\n`);

      return `File ${path} written successfully.`;
    }
    case 'readFile': {
      const { path } = args;
      const content = await webcontainer.fs.readFile(path, 'utf-8');
      return content;
    }
    case 'runCommand': {
      const { command, args: cmdArgs = [] } = args;

      // Log the command to terminal with styling
      const fullCommand = `${command} ${cmdArgs.join(' ')}`;
      onOutput?.(`\r\n\x1b[32monyx@puter:~\x1b[0m \x1b[1m${fullCommand}\x1b[0m\r\n`);

      const process = await webcontainer.spawn(command, cmdArgs);

      let output = '';
      process.output.pipeTo(new WritableStream({
        write(data) {
          output += data;
          onOutput?.(data);
        }
      }));

      const exitCode = await process.exit;
      return `Command exited with code ${exitCode}. Output:\n${output}`;
    }
    case 'listFiles': {
      const { path = '.' } = args;
      const files = await webcontainer.fs.readdir(path);
      return JSON.stringify(files);
    }
    case 'githubPush': {
      const { repoName, commitMessage = 'Initial commit from OnyxGPT' } = args;

      onOutput?.(`\r\n\x1b[35m[GitHub]\x1b[0m Pushing to repository: ${repoName}...\r\n`);
      onOutput?.(`\x1b[35m[GitHub]\x1b[0m Commit message: "${commitMessage}"\r\n`);

      // In a real scenario, this would call a backend service that uses the user's GitHub OAuth token
      // For now, we'll simulate the success.
      return `Successfully created repository ${repoName} and pushed code with message: "${commitMessage}".`;
    }
    default:
      throw new Error(`Unknown tool: ${name}`);
  }
};
