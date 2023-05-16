import { Request, Response, NextFunction } from "express"
import { ZodError } from "zod"

class AppError extends Error {

    statusCode: number

    constructor(message: string, statusCode: number = 400) {
        super(message)
        this.statusCode = statusCode
    }

}

const handleError = async (error: Error, req: Request, res: Response, next: NextFunction) => {

    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            message: error.message
        })
    }
    console.error(error)

    if(error instanceof ZodError){
        return res.status(400).json({
            message: error.flatten().fieldErrors,
        })
    }

    return res.status(500).json({
        message: "Internal server error"
    })

}
export {handleError, AppError}