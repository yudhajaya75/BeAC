import { Response } from "express"

export class BaseResponseApi<T> {
    private success: boolean
    private message: string
    private data: T
    private response: Response

    constructor(success: boolean, message:string, data: T, res: Response) {
        this.success = success
        this.message = message
        this.data = data
        this.response = res
    }
   

    responseSucces(): Response<BaseResponseApi<T>> {
        return this.response.status(200).json({
            success: this.success,
            message: this.message,
            data: this.data
        })
    }

    responseInternalError(): Response<BaseResponseApi<T>> {
        return this.response.status(500).json({
            success: this.success,
            message: this.message,
            data: null
        })
    }

    responDataNotFound (): Response<BaseResponseApi<T>>{
        return this.response.status(404).json({
            success: this.success,
            message: this.message,
            data: null
        })
    }
}