import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { projectServices } from './project.service';

const createProject = catchAsync(async (req: Request, res: Response) => {
  const result = await projectServices.createProject(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Project is added successfully',
    data: result,
  });
});
export const projectContollers = {
  createProject,
};
