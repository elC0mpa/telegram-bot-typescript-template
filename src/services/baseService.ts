import axios, { AxiosInstance } from 'axios'

export abstract class BaseService<T> {
  protected instance: AxiosInstance

  constructor(entityPath: string) {
    this.instance = axios.create({
      baseURL: `${process.env.BASE_URL}${entityPath}`,
    })
  }

  protected create = (entity: Partial<T>): Promise<T> => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await this.instance.post('', entity)
        resolve(data)
      } catch (error) {
        reject(error)
      }
    })
  }

  protected update = (entity: Partial<T>, id: string): Promise<T> => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await this.instance.patch(`/${id}`, entity)
        resolve(data)
      } catch (error) {
        reject(error)
      }
    })
  }
}
