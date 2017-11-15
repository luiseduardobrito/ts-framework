/// <reference types="express" />
import { Request, Response } from 'express';
declare const asyncMiddleware: (fns: Function | Function[]) => ((req: Request, res: Response, next: any) => Promise<any>)[];
export default asyncMiddleware;
