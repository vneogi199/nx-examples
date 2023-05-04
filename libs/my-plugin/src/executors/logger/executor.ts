import { LoggerExecutorSchema } from './schema';

export default async function runExecutor(options: LoggerExecutorSchema) {
  console.log('Executor ran for Logger', options);
  return {
    success: true,
  };
}
