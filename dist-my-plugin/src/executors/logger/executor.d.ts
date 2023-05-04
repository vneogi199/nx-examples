import { LoggerExecutorSchema } from './schema';
export default function runExecutor(options: LoggerExecutorSchema): Promise<{
    success: boolean;
}>;
