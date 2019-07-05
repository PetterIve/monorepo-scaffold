export abstract class CoreError extends Error{
  abstract httpCode: number;
}